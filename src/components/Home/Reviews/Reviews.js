import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Reviews.css";

const Reviews = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allReview`)
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);
  return (
    <section className="review-section">
      <div className="container">
        <h1 className="mb-5 text-center"> Client Survey</h1>
        <div className="d-flex justify-content-center">
          {!feedbacks.length && (
            <div class="spinner-border text-center text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
        <div className="row mt-5">
          {feedbacks.map((feedback) => (
            <ReviewCard feedback={feedback}></ReviewCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
