import React, { useEffect } from "react";
import Navbar from "./navbar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { setSingleJob } from "@/slices/jobSlice";

const jobDetails = () => {
  const { singleJob } = useSelector((store) => store.jobs);
  const { user } = useSelector((store) => store.auth);
  const isApplied =
    singleJob?.application?.some(
      (application) => application.applicant === user?._id
    ) || false;
  const params = useParams();
  const jobId = params.id;

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          console.log(res);
          dispatch(setSingleJob(res.data.job));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto my-10  ">
        <div className="flex justify-between items-center ">
          <div>
            <h1 className="font-bold text-xl">{singleJob?.title}</h1>
            <div className="my-5">
              <Badge className="text-blue-700 font-bold" variant="ghost">
                {singleJob?.position} Positions
              </Badge>
              <Badge className="text-[#F83082] font-bold" variant="ghost">
                {singleJob?.jobType}
              </Badge>
              <Badge className="text-[#127033] font-bold" variant="ghost">
                {singleJob?.salary} LPA
              </Badge>
            </div>
          </div>
          {isApplied ? (
            <Button
              disabled
              className="bg-gray-300  font-bold rounded-lg cursor-not-allowed"
              variant="outline"
            >
              Already Applied
            </Button>
          ) : (
            <Button className="bg-black text-white" variant="outline">
              Apply Now
            </Button>
          )}
        </div>
        <h1 className="border-b-2 border-b-gray-300 font-semibold py-4">
          Job Description
        </h1>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold my-1 ">
            Role:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.title}
            </span>
          </h1>{" "}
          <h1 className="font-bold my-1 ">
            Location:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.location}
            </span>
          </h1>{" "}
          <h1 className="font-bold my-1 ">
            Description:
            <div className=" font-normal text-gray-800 pl-28 mt-[-25px] ">
              {singleJob?.description}
            </div>
          </h1>{" "}
          <h1 className="font-bold my-1 ">
            Experience:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {" "}
              {singleJob?.experience} Years
            </span>
          </h1>{" "}
          <h1 className="font-bold my-1 ">
            Salary:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.salary} LPA
            </span>
          </h1>{" "}
          <h1 className="font-bold my-1 ">
            Total Applicants:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.application.length}
            </span>
          </h1>{" "}
          <h1 className="font-bold my-1 ">
            Posted Date:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.createdAt.split("T")[0]}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default jobDetails;
