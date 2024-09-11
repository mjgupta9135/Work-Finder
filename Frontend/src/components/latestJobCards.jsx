import React from "react";
import { Badge } from "./ui/badge";
const latestJobCards = () => {
  return (
    <div className="p-5 rounded-md shadow-2xl bg=white border-gray-100 cursor-pointer animate-fadeInUp">
      <div>
        <h1 className="font-semibold text-lg">Company Name</h1>
        <p className="text-sm text-gray-600">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          12 Positions
        </Badge>
        <Badge className="text-[#F83082] font-bold" variant="ghost">
          Part Time
        </Badge>
        <Badge className="text-[#127033] font-bold" variant="ghost">
          24 LPA
        </Badge>
      </div>
    </div>
  );
};

export default latestJobCards;
