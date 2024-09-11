import React from "react";
import Navbar from "../components/navbar";
import Hero from "@/components/hero";
import Categorycarousel from "@/components/categorycarousel";
import LatestJob from "@/components/latestJob";
import Footer from "@/components/footer";
const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categorycarousel />
      <LatestJob />
      <Footer />
    </div>
  );
};

export default home;
