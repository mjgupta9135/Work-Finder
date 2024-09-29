import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

const shortlistedStatus = ["Accepted", "Rejected"];

const applicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);
  const applicationArray = applicants.application;
  const statusHandler = async (status, id) => {
    try {
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status },
        { withCredentials: true }
      );
      if (res?.data?.success) {
        toast.success(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied user</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Full Name</TableHead>
            <TableHead className="font-bold">Email Id</TableHead>
            <TableHead className="font-bold">Phone</TableHead>
            <TableHead className="font-bold">Resume</TableHead>
            <TableHead className="font-bold">Date</TableHead>
            <TableHead className="font-bold">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicationArray?.map((item) => (
            <TableRow key="item._id">
              <TableCell>{item?.applicant?.fullname}</TableCell>
              <TableCell>{item?.applicant?.email}</TableCell>
              <TableCell>{item?.applicant?.phone}</TableCell>
              <TableCell>
                {" "}
                <a
                  className="hover:underline hover:text-blue-500"
                  href={item?.applicant?.profile?.resume}
                  target="_blank"
                >
                  {" "}
                  {item?.applicant?.profile?.resumeOriginalName}
                </a>
              </TableCell>
              <TableCell>{item?.createdAt?.split("T")[0]}</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-32 bg-white cursor-pointer">
                    {" "}
                    {shortlistedStatus?.map((status, map) => {
                      return (
                        <div
                          onClick={() => statusHandler(status, item._id)}
                          key="index"
                          className="flex w-fit items-center my-2 cursor-pointer gap-2 border-2 p-2 "
                        >
                          <span>{status}</span>
                        </div>
                      );
                    })}
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default applicantsTable;
