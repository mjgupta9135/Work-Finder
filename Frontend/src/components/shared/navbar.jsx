import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white flex items-center justify-between mx-auto max-w-7xl h-16 font-poppins">
      <div>
        <h1 className="text-2xl font-bold ">
          JOB<span className="text-[#f83002]">Portal</span>
        </h1>
      </div>
      <div>
        <ul className="flex items-center gap-5 font-medium ">
          <li>Home</li>
          <li>Jobs</li>
          <li>Browse</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
