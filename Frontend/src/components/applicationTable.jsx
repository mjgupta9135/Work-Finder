import React, { memo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";
import clsx from "clsx"; // To help with conditional class names

const ApplicationTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.jobs);

  return (
    <div className="mt-6 border-2 bg-gray-400 rounded-xl mb-20">
      {allAppliedJobs?.length > 0 ? (
        <Table>
          <TableHeader className="font-bold">
            <TableRow className="text-lg">
              <TableHead className="font-bold text-center">Date</TableHead>
              <TableHead className="font-bold text-center">Job Role</TableHead>
              <TableHead className="font-bold text-center">Company</TableHead>
              <TableHead className="text-center font-bold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allAppliedJobs.map((item, index) => (
              <TableRow key={index} className="bg-white">
                <TableCell className="text-center">
                  {item?.createdAt?.split("T")[0] || "N/A"}
                </TableCell>
                <TableCell className="text-center">
                  {item?.job?.title || "N/A"}
                </TableCell>
                <TableCell className="text-center">
                  {item?.job?.company?.name || "N/A"}
                </TableCell>
                <TableCell className="text-center">
                  <Badge
                    className={clsx(
                      "text-xs text-white", // Base styles for all statuses
                      item?.status === "pending" && "bg-gray-400",
                      item?.status === "accepted" && "bg-green-600",
                      item?.status === "rejected" && "bg-red-800"
                    )}
                  >
                    {item?.status || "Unknown"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <span className="text-center block p-6 text-lg">
          You haven't applied for any jobs yet.
        </span>
      )}
    </div>
  );
};

export default memo(ApplicationTable);
