import React from "react";
import "./Customer.css";
import {
  faCogs,
  faTools,
  faBiohazard,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
import FeatureCard from "../FeatureCard/FeatureCard";

const features = [
  {
    icon: faCogs,
    title: "Online Repair Request",
    sub: "One-stop after sales service for worry-free repairs.",
  },
  {
    icon: faTools,
    title: "DJI Care Express",
    sub: "*DJI has a relationship with an insurance company that covers the cost of these programs.",
  },
  {
    icon: faStickyNote,
    title: "Repair Process Inquiry",
    sub: "Receive two years of Accidental Hardware Damage coverage with your Osmo Shield purchase",
  },
  {
    icon: faBiohazard,
    title: "Immediate Intel",
    sub: "Respond to urgent missions with rapid aerial awareness",
  },
];

const Customer = () => {
  return (
    <section className="customer my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-12">
            <div className="title-dialogue">
              <h2>HOW TO SERVE OUR CUSTOMER?</h2>
              <h4 className="brand-color">
                Capture Your World Like Never Before
              </h4>
            </div>
            <div>
              <p className="customer-description mt-4 ">
                Under this Limited Warranty, DJI warrants that each DJI product
                that you purchase will be free from material and workmanship
                defects under normal use in accordance with DJI's published
                product materials during the warranty period. The warranty
                period for different products and parts vary, please check
                http://www.dji.com/service otherwise agreed upon between you and
                DJI.
              </p>
            </div>
          </div>
          <div className="col-md-7 col-12">
            <div className="d-flex justify-content-center">
              <div className="row">
                {features.map((feature) => (
                  <FeatureCard feature={feature}></FeatureCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
