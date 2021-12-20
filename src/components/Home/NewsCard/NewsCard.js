import React from "react";
import "./NewsCard.css";

const NewsCard = ({ news }) => {
  const { title, time, description, image } = news;
  return (
    <div className="col-md-6 col-12 my-4">
      <div className="card">
        <div className="row">
          <div className="col">
            <img src={image} alt="" className="news-image" />
          </div>
          <div className="col p-3 news-details">
            <h4>{title}</h4>
            <p className="brand-color">posted on {time}</p>
            <p className="text-secondary">{description}</p>
            <div className="d-flex justify-content-end">
              <button className="btn me-3 btn-news">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
