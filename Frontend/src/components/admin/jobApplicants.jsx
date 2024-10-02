import React, { useEffect } from "react";
import Navbar from "../navbar";
import ApplicantsTable from "./applicantsTable";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAllApplicants } from "@/slices/applicantSlice";
const jobApplicants = () => {
  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const { applicants } = useSelector((store) => store.application);

  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_END_POINT}/${jobId}/applicants`,
          {
            withCredentials: true,
          }
        );
        if (res?.data?.success) {
          dispatch(setAllApplicants(res.data.job));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllApplicants();
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-xl my-5">
          Applicants ({applicants?.application?.length})
        </h1>
        <ApplicantsTable />
      </div>
    </>
  );
};

export default jobApplicants;
