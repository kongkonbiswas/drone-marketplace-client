import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import Typical from "react-typical";
// import Typewriter from "typewriter-effect";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <NavBar></NavBar>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="text-white text-center header-top">
          <h1 className="mt-5 h1">
            <b>WELCOME TO MY DRONE MARKETPLACE</b>
            <span className="span"></span>
          </h1>
          <h2 className="mt-5 h2">
            <b>
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "YOUR SMILE IS OUR STRENGTH.",
                  1500,
                  "SEARCH FOR WHAT YOU WANT !",
                  1200,
                  "WE ARE WAITING FOR YOUR STEP...",
                  1000,
                  "THE FUTURE IS ROLLING",
                  1000,
                  "IMAGINING ABOVE EVERYTHING",
                  1000,
                  "STAY WITH US.",
                  1300,
                ]}
              />
            </b>
            <span className="span"></span>
          </h2>
          <Link to="/explore">
            <Button variant="primary" type="submit">
              Explore All
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
