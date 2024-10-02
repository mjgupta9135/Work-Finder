import { setAllJobs } from "@/slices/jobSlice";
import { JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((store) => store.jobs);

  const [loading, setLoading] = useState(false); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    const fetchAllJobs = async () => {
      setLoading(true); // Start loading
      setError(null); // Reset error state
      try {
        const res = await axios.get(
          `${JOB_API_END_POINT}/get?keyword=${searchQuery}`,
          {
            withCredentials: true,
          }
        );
        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs)); // Dispatch jobs to the store
        }
      } catch (error) {
        setError(error); // Set error state
        console.log(error);
      } finally {
        setLoading(false); // End loading
      }
    };

    // Fetch jobs only if searchQuery changes

    fetchAllJobs();
  }, []); // Include dependencies

  return { loading, error }; // Return loading and error states
};

export default useGetAllJobs;
