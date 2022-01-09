import React from "react";
import Arrival from "./Arrival/Arrival";
import Product from "./Product/Product";
import Subscribe from "./Subscribe/Subscribe";
import About from "./About/About";
import Testimonial from "./Testimonial/Testimonial";
import Footer from "./Footer/Footer";
import Slider from "./Slider/Slider";
import FooterTag from "./Footer/FooterTag";

const Home = () => {
  return (
    <div>
      <Slider />
      <About />
      <Arrival />
      <Product />
      <Subscribe />
      <Testimonial />
      <Footer />
      <FooterTag />
    </div>
  );
};

export default Home;
