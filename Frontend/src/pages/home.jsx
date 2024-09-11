import React from "react";
import Navbar from "../components/navbar";
import Hero from "@/components/hero";
import Categorycarousel from "@/components/categorycarousel";
const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categorycarousel />
      {/* <Footer/> */}
    </div>
  );
};

export default home;
