import React from "react";
import "./LatestCard.css";

const LatestCard = ({ service }) => {
  const { title, time, description, image } = service;
  return (
    <div className="col-md-6 col-12 my-4">
      <div className="card">
        <div className="row">
          <div className="col">
            <img src={image} alt="" className="card-image" />
          </div>
          <div className="col p-3 news-details">
            <h4>{title}</h4>
            <p className="brand-color">posted on {time}</p>
            <p className="text-secondary">{description}</p>
            <div className="d-flex justify-content-end">
              <button className="btn me-3 btn-card">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
