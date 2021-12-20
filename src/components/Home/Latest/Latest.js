import React from "react";
import construction from "../../../images/Drone1 (1).jpg";
import delivery from "../../../images/Drone1 (2).jpg";
import LatestCard from "../PopularService/LatestCard";

const latestService = [
  {
    title: "Drone For Construction",
    time: "December 28, 2021",
    description:
      "The DJI Mini 2 drone is small enough to fit in the palm of your hand but don't let its size fool you into thinking it is not a capable drone that can handle the conditions and also produce stunning videos and images.",
    image: construction,
  },
  {
    title: "Drone For Delivery",
    time: "January 16, 2022",
    description:
      "DJI Makes The World,s Best Drone Even Better With New Mavic 3 Better Sensor, Dual-Camera System, Omnidirectional Obstacle Sensing, Smarter Flight Modes, and Longer Flight Times Make DJI Mavic 3 Drone the Ultimate Tool for Capturing the World from Above",
    image: delivery,
  },
];

const Latest = () => {
  return (
    <section className="news">
      <div className="container">
        <h1 className="mb-5 text-center">Latest Popular Product</h1>
        <div className="row mt-5">
          {latestService.map((service) => (
            <LatestCard service={service}></LatestCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Latest;
