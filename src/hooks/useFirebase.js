import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [authError, setAuthError] = useState("");

  const auth = getAuth();
  const GoogleProvider = new GoogleAuthProvider();

  // Google Sign In
  const signInUsingGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        setIsLoading(true);
        setUser(result.user);
        setAuthError("");
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // gmail register in
  const registerUser = (email, password, name, location, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setIsLoading(true);
        setAuthError("");
        const newUser = { email, displayName: name };
        // send name to firebase after creation
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  // gmail login in
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observer for user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);

  useEffect(() => {
    fetch(
      `https://arcane-brushlands-82078.herokuapp.com/users/admin?email/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.isAdmin);
      });
  }, [user.email]);

  return {
    user,
    admin,
    loginUser,
    authError,
    isLoading,
    setIsLoading,
    registerUser,
    signInUsingGoogle,
    logout,
  };
};

export default useFirebase;
