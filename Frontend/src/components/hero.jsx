import { Search } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/slices/jobSlice";
import { useNavigate } from "react-router-dom";

const hero = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const searchJobHandler = () => {
    dispatch(setSearchQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center mb-[-60px] my-4 animate-fadeInLeft">
      <span className="px-4 py-2   rounded-full bg-gray-100 text-[#fb3002] font-bold text-xl">
        N0.1 JOB Hunt Website
      </span>
      <h1 className="text-5xl font-bold mt-8 leading-normal">
        Search, Apply & <br /> Get Your{" "}
        <span className="text-[#6A38C2]">Dream JOBs</span>
      </h1>
      <p className="text-lg font-semibold text-[#ff04d5]">
        Search, apply, and get your dream job with ease and confidence.
      </p>

      <div className="flex w-[40%] shadow-lg border-gray-200 pl-10 rounded-full items-center   mx-auto  mt-5">
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Find Your Dream Jobs"
          className="outline-none border-none w-full"
        />
        <Button
          onClick={searchJobHandler}
          className=" text-white rounded-r-full bg-black hover:bg-[#6A38C2] ease-in-out duration-100S "
        >
          <Search className="h-5 w-8" />
        </Button>
      </div>
    </div>
  );
};

export default hero;
