"use client";
import React from "react";
// import CompanyLogoes from "../Bottom/page";
// import { navlinks } from "@/lib/constants";

const HeroSection = () => {
  return (
    <div>
      {/* <!-- Hero Section --> */}
      <section className="relative bg-cover bg-center h-[30rem] w-screen bg-hero">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto flex flex-col justify-center items-center text-center text-white h-full px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white z-10">
            Fix And Design Website Services
          </h1>
          <p className="text-lg sm:text-xl mb-6 max-w-2xl z-10">
            Enhance your online presence with our fix and design website
            services, offering seamless repairs, modern designs, and
            user-friendly layouts to elevate your business and attract
            customers.
          </p>
        </div>
      </section>

      {/* <!-- Stats Section --> */}
      <div className="bg-blue-950 text-white py-6">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <h2 className="text-2xl font-bold">48,575+</h2>
            <p>Registered Websites</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">30,082+</h2>
            <p>Publishers & Writers</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">267,609+</h2>
            <p>Tasks Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
