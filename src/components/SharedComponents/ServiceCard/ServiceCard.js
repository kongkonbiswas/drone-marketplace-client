import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./ServiceCard.css";
import useAuth from "../../../hooks/useAuth";

const ServiceCard = ({ service }) => {
  const [redirectLocation, setRedirectLocation] = useState("");
  const location = useLocation();
  const { serviceTitle, description, price, imageURL, _id } = service;
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      "https://arcane-brushlands-82078.herokuapp.com/admin?email=" + user.email
    )
      .then((res) => res.json())
      .then((data) => {
        data
          ? setRedirectLocation("/dashboard/manage-orders")
          : setRedirectLocation(`/dashboard/place-order/${_id}`);
      });
  }, [user.email]);

  return (
    <div className="col-md-4 col-12 my-4">
      <div className="card service-card">
        <div className="card-image">
          <img src={imageURL} alt="" className="img-fluid" />
        </div>
        <div className="service-charge d-flex justify-content-center align-items-center">
          ${price}
        </div>
        <div className="p-4 d-flex">
          <div className="me-3 d-flex justify-content-center">
            <div className="black-div"></div>
            <div className="color-div"></div>
          </div>
          <h6>{serviceTitle}</h6>
        </div>
        <div></div>
        {location.pathname === "/" || location.pathname === "/home" ? (
          <Link to={redirectLocation}>
            <div className="service-details p-4">
              <div className="service-details-header mb-3">
                <div className="d-flex">
                  <div className="me-3 d-flex justify-content-center">
                    <div className="white-div"></div>
                    <div className="white-div"></div>
                  </div>
                  <h5>{serviceTitle}</h5>
                </div>
              </div>
              <div className="details-para mb-5">
                <p>{description}</p>
              </div>
              <button className="btn btn-success">Order Now</button>
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default ServiceCard;
