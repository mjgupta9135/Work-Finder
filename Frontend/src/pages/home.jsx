import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Hero from "@/components/hero";
import Categorycarousel from "@/components/categorycarousel";
import LatestJob from "@/components/latestJob";
import Footer from "@/components/footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchQuery } from "@/slices/jobSlice";
const home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useGetAllJobs();
  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  });

  useEffect(() => {
    return () => {
      dispatch(setSearchQuery(""));
    };
  }, [dispatch]);
  return (
    <div>
      <Hero />
      <Categorycarousel />
      <LatestJob />
    </div>
  );
};

export default home;
