import React from "react";
import Services from "../../SharedComponents/Services/Services";
import Customer from "../Customer/Customer";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Latest from "../Latest/Latest";
import Reviews from "../Reviews/Reviews";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Customer />
      <Services />
      <Reviews />
      <Latest />
      <Footer />
    </div>
  );
};

export default HomePage;
