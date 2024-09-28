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

const shortlistedStatus = ["Accepted", "Rejected"];

const applicantsTable = () => {
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

          <TableBody>
            <TableRow>
              <TableCell>Mrityunjay Gupta</TableCell>
              <TableCell>mjguptacse@gmail.com</TableCell>
              <TableCell>9135407413</TableCell>
              <TableCell>Mrityunjay.pdf</TableCell>
              <TableCell>21/01/2001</TableCell>
              <TableCell>
                {shortlistedStatus.map((status, map) => {
                  return <div key="index"></div>;
                })}
              </TableCell>
            </TableRow>
          </TableBody>
        </TableHeader>
      </Table>
    </div>
  );
};

export default applicantsTable;
