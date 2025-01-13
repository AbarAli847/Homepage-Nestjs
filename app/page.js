import React from "react";
import HeroSection from "./HeroSection/page";
import CompanyLogoes from "./Bottom/page";
import Cards from "@/components/Cards";
import OpacityIamge from "@/components/OpacityIamge";
// import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <div className="overflow-x-hidden  ">
        <HeroSection />
        <CompanyLogoes />
        <Cards />
        <OpacityIamge />
      </div>
    </div>
  );
};

export default Home;
