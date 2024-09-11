import React from "react";
import Navbar from "../components/navbar";
import Hero from "@/components/hero";
const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <CategoryCarousel/>
      <Footer/> */}
    </div>
  );
};

export default home;
