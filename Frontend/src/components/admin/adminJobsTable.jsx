import React, { useEffect, useState } from "react";
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
import { Eye, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CompanyShimmer, JobShimmer } from "../shimmer";
import useGetAdminJobs from "@/hooks/useGetAdminJobs";

const AdminJobsTable = () => {
  const { loading } = useGetAdminJobs(); // Get loading state from the hook

  const { allAdminJobs, searchJob } = useSelector((store) => store.jobs); // Get jobs from Redux store

  const [filterJobs, setFilterJobs] = useState([]); // Initialize filtered jobs
  const navigate = useNavigate();

  useEffect(() => {
    if (allAdminJobs) {
      // Ensure allAdminJobs is defined
      const filteredJobs =
        allAdminJobs.filter((job) => {
          if (searchJob) {
            return (
              job?.company?.name
                ?.toLowerCase()
                ?.includes(searchJob?.toLowerCase()) ||
              job?.title?.toLowerCase().includes(searchJob?.toLowerCase())
            );
          }
          return true;
        }) || []; // Ensure this is always an array

      setFilterJobs(filteredJobs); // Set the filtered jobs
    } else {
      setFilterJobs([]); // Reset to empty array if allAdminJobs is undefined
    }
  }, [allAdminJobs, searchJob]);

  return (
    <div className="min-w-full">
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
          {loading ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                <JobShimmer />
              </TableCell>
            </TableRow>
          ) : filterJobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                You haven't posted any job yet
              </TableCell>
            </TableRow>
          ) : (
            filterJobs.map((job) => (
              <TableRow key={job._id}>
                <TableCell className="text-center">
                  {job?.company?.name}
                </TableCell>
                <TableCell className="text-center ">{job?.title}</TableCell>
                <TableCell className="text-center">
                  {new Date(job?.createdAt).toLocaleDateString() || "N/A"}
                </TableCell>
                <TableCell className="text-center">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-42 bg-white">
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

export default AdminJobsTable;
