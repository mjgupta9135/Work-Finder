import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
const latestJobCards = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`details/${job._id}`)}
      className="p-5 rounded-md shadow-2xl bg=white border-gray-100 cursor-pointer animate-fadeInUp"
    >
      <div>
        <h1 className="font-semibold text-lg">{job?.company?.name}</h1>
        <p className="text-sm text-gray-600">{job?.location}</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">
          {job?.description?.split(" ").slice(0, 20).join(" ")}
          {job?.description?.split(" ").length > 20 && "..."}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className="text-[#F83082] font-bold" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#127033] font-bold" variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>
    </div>
  );
};

export default latestJobCards;
