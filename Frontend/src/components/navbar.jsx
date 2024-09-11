import React from "react";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white font-display flex items-center justify-between mx-auto max-w-7xl h-16 font-poppins">
      <div>
        <Link to="/">
          <h1 className="text-2xl font-bold ">
            Work<span className="text-[#f83002]">Finder</span>
          </h1>
        </Link>
      </div>
      <div className="flex gap-12">
        <ul className="flex items-center gap-5 font-semibold ">
          <Link to="/">
            {" "}
            <li className="cursor-pointer">Home</li>
          </Link>
          <li className="cursor-pointer">Jobs</li>
          <li className="cursor-pointer">Browse</li>
        </ul>
        {!user ? (
          <div className="flex gap-4 items-center">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button
                className="bg-[#6a38c2] hover:bg-[#500ec1] text-white"
                variant="outline"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        ) : (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar>
                <AvatarImage
                  className="cursor-pointer"
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />{" "}
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="my-4">
                <div className="flex gap-4 space-y-2 items-center ">
                  <Avatar>
                    <AvatarImage
                      className="cursor-pointer"
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />{" "}
                  </Avatar>
                  <div className="">
                    <h4 className="font-medium">Mrityunjay Kumar Gupta</h4>
                    <p className="text-sm text-muted-foreground">
                      I Am A Full Stack Developer
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button varient="Link"> View Profile</Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button varient="Link">Logout</Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default Navbar;
