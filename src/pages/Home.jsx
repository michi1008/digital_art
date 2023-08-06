import React from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <FeaturedProducts />
      <Service />
      <About />
      <Contact />
    </>
  );
};



export default Home;
