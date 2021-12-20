import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./FeatureCard.css";

const FeatureCard = ({ feature }) => {
  const { icon, title, sub } = feature;
  return (
    <div className="col-5 feature">
      <div className="d-flex justify-content-center align-items-center">
        <div className="feature-icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="feature-description">
          <p className="my-1">{title}</p>
          <small>{sub}</small>
        </div>
      </div>
      <div className="feature-more d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon={faChevronRight} className="icon" />
      </div>
    </div>
  );
};

export default FeatureCard;
