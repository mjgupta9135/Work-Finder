import React from "react";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/slices/authSlice";
import axios from "axios";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async (e) => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-white font-display flex items-center justify-between mx-auto max-full px-16 h-16 shadow-2xl font-poppins">
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
          <Link to="/jobs">
            <li className="cursor-pointer">Jobs</li>
          </Link>
          <Link to="/browse">
            <li className="cursor-pointer">Browse</li>
          </Link>
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
                  src={user?.profile?.profilePhoto}
                  alt="@shadcn"
                />{" "}
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-white shadow-xl px-5 py-2 animate-fadeInRight mt-3 rounded-b-md mr-4">
              <div className="my-4">
                <div className="flex gap-4 space-y-2 items-center  ">
                  <Avatar>
                    <AvatarImage
                      className="cursor-pointer"
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />{" "}
                  </Avatar>
                  <div className="">
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Link to="/profile">
                      <Button varient="Link"> View Profile</Button>
                    </Link>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button onClick={logoutHandler} varient="Link">
                      Logout
                    </Button>
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
