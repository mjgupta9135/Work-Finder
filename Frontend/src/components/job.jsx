import { Bookmark, icons } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">2 Days Ago</p>
        <Button variant="outline" className="rounded-full " size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://imgs.search.brave.com/IrjckpSv0CZsbpLfnrNzwh401w4BcZjUvJYL3U9I8cI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NzE1Mjg1NS92ZWN0/b3IvbG9nby13aXRo/LXRoZS1sZXR0ZXIt/Yy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9XzZuSE9ReTNn/VjE2ZENIeGpUUUhM/b25JZWdWQU9YSm43/a012ZXJHdEZ3OD0"></AvatarImage>
          </Avatar>
        </Button>
        <div>
          <h1 className="font-bold text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          eaque quaerat, quam nihil labore vitae voluptas fugiat rerum laborum
          vel?
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4 justify-between px-3">
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
      <div className="flex items-center gap-4 mt-8 justify-between">
        <Button variant="outline">Details</Button>
        <Button variant="outline" className="bg-[#6a38c2] text-white">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default job;
