import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { setSingleJob } from "@/slices/jobSlice";
import { toast } from "sonner";
import { DescriptionShimmer } from "./shimmer";

const JobDetails = () => {
  const { singleJob } = useSelector((store) => store.jobs);
  const { user } = useSelector((store) => store.auth);

  const [isApplied, setIsApplied] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        {
          withCredentials: true,
        }
      );

      if (res?.data?.success) {
        setIsApplied(true);
        const updatedSingleJob = {
          ...singleJob,
          application: [...singleJob.application, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updatedSingleJob));
        toast.success(res?.data?.message);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    if (error.response) {
      const errorData = error.response.data;
      if (Array.isArray(errorData.errors)) {
        errorData.errors.forEach((err) => toast.error(err.message));
      } else if (errorData.message) {
        toast.error(errorData.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    } else if (error.request) {
      toast.error("No response received from server");
    } else {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      setLoading(true); // Set loading to true while fetching data
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res?.data?.job));
          setIsApplied(
            res?.data?.job?.application?.some(
              (application) => application?.applicant === user?._id
            )
          );
        }
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div className="bg-gray-200 w-full px-20 py-10 mx-auto min-h-[100vh] ">
      {loading ? (
        <DescriptionShimmer /> // Render shimmer while loading is true
      ) : (
        <div>
          <div className="flex justify-between items-center">
            <div>
              {" "}
              <div className="flex gap-4 items-center mb-4">
                <img
                  className="w-10 h-10 object-cover"
                  src={singleJob?.company?.logo}
                  alt=""
                />
                <h1 className="font-bold text-2xl ">
                  {singleJob?.company?.name}
                </h1>
              </div>
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
            <Button
              onClick={isApplied ? null : applyJobHandler}
              disabled={isApplied}
              className={`font-bold rounded-lg ${
                isApplied
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-black text-white"
              }`}
              variant="outline"
            >
              {isApplied ? "Already Applied" : "Apply Now"}
            </Button>
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
            </h1>
            <h1 className="font-bold my-1 ">
              Location:{" "}
              <span className="pl-4 font-normal text-gray-800">
                {singleJob?.location}
              </span>
            </h1>
            <h1 className="font-bold my-1 ">
              Description:-
              <div className="font-normal ml-10 text-gray-800">
                {singleJob?.description}
              </div>
            </h1>
            <h1 className="font-bold my-1">Requirements:-</h1>
            <ul className="pl-4 font-normal text-gray-800 list-disc">
              {singleJob?.requirements.split(".").map((item, index) => {
                return item.trim() ? (
                  <li className="ml-10" key={index}>
                    {item.trim()}
                  </li>
                ) : null;
              })}
            </ul>

            <h1 className="font-bold my-1 ">
              Experience:{" "}
              <span className="pl-4 font-normal text-gray-800">
                {singleJob?.experience} Years
              </span>
            </h1>
            <h1 className="font-bold my-1 ">
              Salary:{" "}
              <span className="pl-4 font-normal text-gray-800">
                {singleJob?.salary} LPA
              </span>
            </h1>
            <h1 className="font-bold my-1 ">
              Total Applicants:{" "}
              <span className="pl-4 font-normal text-gray-800">
                {singleJob?.application.length}
              </span>
            </h1>
            <h1 className="font-bold my-1 ">
              Posted Date:{" "}
              <span className="pl-4 font-normal text-gray-800">
                {singleJob?.createdAt.split("T")[0]}
              </span>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
