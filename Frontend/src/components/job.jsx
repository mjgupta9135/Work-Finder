import { Bookmark, icons } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDiff = currentTime - createdAt;
    return Math.floor(timeDiff / (1000 * 24 * 60 * 60));
  };
  return (
    <div className="p-5 rounded-md shadow-xl bg-white animate-fadeInUp  border-gray-200">
      <div className="flex items-center justify-between ">
        <p className="text-sm text-gray-600">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} Days Ago`}
        </p>
        <Button variant="outline" className="rounded-full " size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2 ">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://imgs.search.brave.com/IrjckpSv0CZsbpLfnrNzwh401w4BcZjUvJYL3U9I8cI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NzE1Mjg1NS92ZWN0/b3IvbG9nby13aXRo/LXRoZS1sZXR0ZXIt/Yy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9XzZuSE9ReTNn/VjE2ZENIeGpUUUhM/b25JZWdWQU9YSm43/a012ZXJHdEZ3OD0"></AvatarImage>
          </Avatar>
        </Button>
        <div>
          <h1 className="font-bold text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">{job?.location}</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4 justify-between px-3">
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
      <div className="flex items-center gap-4 mt-8 justify-between">
        <Button
          onClick={() => navigate(`/details/${job?._id}`)}
          variant="outline"
        >
          Details
        </Button>
        <Button variant="outline" className="bg-[#6a38c2] text-white">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default job;
