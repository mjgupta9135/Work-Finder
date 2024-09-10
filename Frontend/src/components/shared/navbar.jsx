import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
const Navbar = () => {
  return (
    <div className="bg-white flex items-center justify-between mx-auto max-w-7xl h-16 font-poppins">
      <div>
        <h1 className="text-2xl font-bold ">
          Work<span className="text-[#f83002]">Finder</span>
        </h1>
      </div>
      <div>
        <ul className="flex items-center gap-5 font-medium ">
          <li>Home</li>
          <li>Jobs</li>
          <li>Browse</li>
        </ul>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
