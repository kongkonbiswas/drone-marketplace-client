import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import ServiceCard from '../../SharedComponents/ServiceCard/ServiceCard';
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";

const Explore = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allService")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <NavBar />
      <div className="d-flex justify-content-center pt-4">
        {!services.length && (
          <div class="spinner-border text-center text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <div className="row p-5">
        {services?.map((pd) => (
          <div className="col-md-4 col-12 my-4">
            <div className="card service-card">
              <div className="card-image">
                <img src={pd?.imageURL} alt="" className="img-fluid" />
                <div className="service-charge d-flex justify-content-center align-items-center">
                  ${pd?.price}
                </div>
              </div>
              <div className="p-4 d-flex">
                <div className="me-3 d-flex justify-content-center">
                  <div className="black-div"></div>
                  <div className="color-div"></div>
                </div>
                <h6>{pd?.serviceTitle}</h6>
              </div>
              <div></div>
              <div className="service-details p-4">
                <div className="service-details-header mb-3">
                  <div className="d-flex">
                    <div className="me-3 d-flex justify-content-center">
                      <div className="white-div"></div>
                      <div className="white-div"></div>
                    </div>
                    <h5>{pd?.serviceTitle}</h5>
                  </div>
                </div>
                <div className="details-para mb-5">
                  <p>{pd?.description}</p>
                </div>
                <Link to={`/dashboard/place-order/${pd._id}`}>
                  <button className="btn btn-success">Order Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
