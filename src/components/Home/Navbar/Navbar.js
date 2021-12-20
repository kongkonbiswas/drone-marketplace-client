import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import useAuth from "../../../hooks/useAuth";

const NavBar = () => {
  const { user, logout } = useAuth();
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container">
          <Link className="navbar-brand text-center" to="/">
            <h3 className="m-0 brand-color website-name">DRONE-ONLINE</h3>
            <small className="business">#Best is here</small>
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="ms-auto navbar-nav">
              <li className="nav-item me-5">
                <Link className="nav-link" to="/home">
                  <b>Home</b>
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link" to="/dashboard">
                  <b>Dashboard</b>
                </Link>
              </li>
            </ul>
            {!user?.email ? (
              <Link to="/login">
                <button className="btn btn-outline-info ms-md-5">Login</button>
              </Link>
            ) : (
              <p className="mt-3 text-success text-uppercase">
                {user.displayName}{" "}
                <b>
                  <button
                    className="btn btn-outline-danger ms-md-5"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </b>
              </p>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
