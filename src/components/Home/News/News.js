import React from "react";
import news1img from "../../../images/Drone1 (1).jpg";
import news2img from "../../../images/Drone1 (2).jpg";
import NewsCard from "../NewsCard/NewsCard";

const latestNews = [
  {
    title: "Drone For Construction",
    time: "Dechambar 15, 2021",
    description:
      "RYZN Drone online at best price in Bangladesh. Check full specifications of DJI drone with its features...",
    image: news1img,
  },
  {
    title: "Drone For Dalivery",
    time: "March 17, 2021",
    description:
      "Buy DJI Drone online at best price in Bangladesh. Check full specifications of Ryzn Drone with its features...",
    image: news2img,
  },
];

const News = () => {
  return (
    <section className="news">
      <div className="container">
        <h1 className="mb-5 text-center">Latest Popular Product</h1>
        <div className="row mt-5">
          {latestNews.map((news) => (
            <NewsCard news={news}></NewsCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
