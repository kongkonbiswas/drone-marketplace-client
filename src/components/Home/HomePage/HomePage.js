import React from "react";
import Services from "../../SharedComponents/Services/Services";
import Customer from "../Customer/Customer";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import News from "../News/News";
import Reviews from "../Reviews/Reviews";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Customer />
      <Services />
      <Reviews />
      <News />
      <Footer />
    </div>
  );
};

export default HomePage;
