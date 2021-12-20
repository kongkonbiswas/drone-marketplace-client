import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allService")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="services my-5">
      <div className="container">
        <h1 className="text-center mb-5">Our Products</h1>
        <div className="d-flex justify-content-center">
          {!services.length && (
            <div class="spinner-border text-center text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
        <div className="row">
          {services.slice(-6).map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
