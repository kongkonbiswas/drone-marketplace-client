import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./ReviewCard.css";
const showRating = (rate) => {
  const stars = [];
  const int = parseInt(rate, 10);

  for (let i = 1; i <= int; i++) {
    stars.push(<FontAwesomeIcon className="rating-icon" icon={faStar} />);
  }
  console.log(stars);

  return <div>{stars}</div>;
};

const ReviewCard = ({ feedback }) => {
  const { name, image, rate, discription } = feedback;
  return (
    <div className="col-md-4 col-12">
      <div className="card reviewCard p-5 d-flex flex-column align-items-center justify-content-between">
        <div className="client-image-div">
          <img src={image} alt="" className="img-fluid client-image" />
        </div>
        <div className="card-description mt-4">
          <p className="text-center">
            <i>"{discription}"</i>
          </p>
        </div>
        <div className="rating d-flex align-items-center justify-content-between">
          <b>{name}</b>
          {showRating(rate)}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
