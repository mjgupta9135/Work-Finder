import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AdminJobsTable from "@/components/admin/adminJobsTable";
import useGetAdminJobs from "@/hooks/useGetAdminJobs";
import { setSearchJob } from "@/slices/jobSlice";

const adminJobs = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchJob(input));
  }, [input]);
  return (
    <>
      <div className="max-w-6xl mx-auto my-10 ">
        <div className="flex items-center justify-between my-5">
          <Input
            className="w-fit"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Filter By Name"
          ></Input>
          <Button
            onClick={() => navigate("/admin/jobs/create")}
            variant="outline"
            className="bg-black text-white"
          >
            Post New Job
          </Button>
        </div>

        <AdminJobsTable />
      </div>
    </>
  );
};

export default adminJobs;
