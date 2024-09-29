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

const shortlistedStatus = ["Accepted", "Rejected"];

const applicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);
  const applicationArray = applicants.application;
  console.log(applicationArray[0]);
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied user</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email Id</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicationArray.map((item) => (
            <TableRow>
              <TableCell>{item.applicant.fullname}</TableCell>
              <TableCell>{item.applicant.email}</TableCell>
              <TableCell>{item.applicant.phone}</TableCell>
              <TableCell>Mrityunjay.pdf</TableCell>
              <TableCell>21/01/2001</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-32 bg-white cursor-pointer">
                    {" "}
                    {shortlistedStatus.map((status, map) => {
                      return (
                        <div
                          key="index"
                          className="flex w-fit items-center my-2 cursor-pointer "
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
