import React, { useState } from "react";
import "./Login.css";
import GoogleIcon from "../../images/googleicon.png";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Alert, Button, Form } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState({});
  const { user, signInUsingGoogle, registerUser, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handeleGoogleSIgnIn = () => {
    signInUsingGoogle(location, history);
  };

  const handleOnBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newLoginData = { ...email };
    newLoginData[field] = value;
    setEmail(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (email.password !== email.password2) {
      alert("Passwords do not match");
      return;
    }
    registerUser(email.email, email.password, email.name, location, history);
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="d-flex justify-content-center ">
        <div className="text-center login-card card p-5">
          <button
            onClick={handeleGoogleSIgnIn}
            className="btn btn-block btn-customise d-flex justify-content-center align-items-center mb-4 mx-4"
          >
            {" "}
            <img src={GoogleIcon} alt="" /> Signin with Google{" "}
          </button>
          <div>
            <Form onSubmit={handleLoginSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  onBlur={handleOnBlur}
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  onBlur={handleOnBlur}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  onBlur={handleOnBlur}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Control
                  onBlur={handleOnBlur}
                  name="password2"
                  type="password"
                  placeholder="Retype Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <Link to="/login">Are you already an register User?</Link>
            {user?.email && (
              <Alert variant="success">User Created Successfully!</Alert>
            )}
            {authError && <Alert variant="danger">{authError}</Alert>}
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <div className="bg-line-color-1"></div>
        <div className="bg-line-black"></div>
        <div className="bg-line-color-2"></div>
      </div>
    </div>
  );
};

export default Login;
