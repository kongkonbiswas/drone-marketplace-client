import React, { useState } from 'react';
import './Login.css';
import GoogleIcon from '../../images/googleicon.png'
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Alert, Button, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { signInUsingGoogle, loginUser, authError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const history = useHistory();

  const handeleGetEmail = (e) => {
    setEmail(e.target.value);
  }
  const handeleGetPassword = (e) => {
    setPassword(e.target.value);
  }


  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password, location, history)
  }

  const handeleGoogleSIgnIn = () => {
    signInUsingGoogle(location, history);
  }

  return (
    <div className="login">
      <div className='d-flex justify-content-center '>
        <div className='text-center login-card card p-5'>
          <div className="d-flex justify-content-center my-3">
            <Link className="navbar-brand text-center" to="/">
              <h3 className='m-0 brand-color website-name'>DRONE-SHOP</h3>
              <small className='business text-dark'>WE ARE TRYING TO CHANGE</small>
            </Link>
          </div>
          <h4 >Login With</h4>
          <button onClick={handeleGoogleSIgnIn} className='btn btn-block btn-customise d-flex justify-content-center align-items-center mb-4 mx-4'> <img src={GoogleIcon} alt="" /> Signin with Google </button>
          <div>
            <Form onSubmit={handleLoginSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={handeleGetEmail} name="email" type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control onChange={handeleGetPassword} name="password" type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" value="login" type="submit">
                Submit
              </Button>
            </Form>
            <Link to="/register">New User?</Link>
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