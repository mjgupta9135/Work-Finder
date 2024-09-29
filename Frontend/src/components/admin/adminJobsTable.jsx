import React, { useEffect, useState } from "react";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";
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
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const adminJobsTable = () => {
  useGetAllCompanies();
  const { allAdminJobs, searchJob } = useSelector((store) => store.jobs);
  const [filterJobs, setFilterJobs] = useState(allAdminJobs);
  const navigate = useNavigate();
  useEffect(() => {
    const filteredJobs =
      allAdminJobs?.length > 0 &&
      allAdminJobs?.filter((job) => {
        if (searchJob) {
          return (
            job?.company?.name
              ?.toLowerCase()
              ?.includes(searchJob?.toLowerCase()) ||
            job?.title?.toLowerCase().includes(searchJob?.toLowerCase())
          );
        }
        return true;
      });

    setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJob]);

  return (
    <div>
      <Table>
        <TableCaption>A List of your recently Posted Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Company Name</TableHead>
            <TableHead className="text-center">Job Title</TableHead>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filterJobs?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                You haven't posted any job yet
              </TableCell>
            </TableRow>
          ) : (
            filterJobs?.map((job) => (
              <TableRow key={job._id}>
                {" "}
                <TableCell className="text-center">
                  {job?.company?.name}
                </TableCell>
                <TableCell className="text-center">{job?.title}</TableCell>
                <TableCell className="text-center">
                  {new Date(job?.createdAt).toLocaleDateString() || "N/A"}
                </TableCell>{" "}
                <TableCell className="text-center">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-42 bg-white">
                      <div
                        onClick={() => navigate(`/admin/companies`)}
                        className="flex items-center gap-4 w-fit cursor-pointer"
                      >
                        <Edit2 className="w-4" />
                        <span>Edit</span>
                      </div>
                      <div
                        onClick={() =>
                          navigate(`/admin/jobs/${job?._id}/applicants`)
                        }
                        className="flex items-center w-fit gap-4 mt-4 cursor-pointer"
                      >
                        <Eye className="w-4" />
                        <span>Applicants</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default adminJobsTable;
