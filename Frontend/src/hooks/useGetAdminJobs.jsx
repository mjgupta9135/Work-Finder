import { setAllAdminJobs } from "@/slices/jobSlice";
import { JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useGetAdminJobs = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const fetchAllAdminJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/getAdminJobs`, {
          withCredentials: true,
        });

        if (res.data.success) {
          // Use setTimeout to delay the dispatch by 1 minute (60000 ms)

          dispatch(setAllAdminJobs(res.data.jobs));
          setLoading(false); // Set loading to false after dispatch
          // 1 minute delay
        }
      } catch (error) {
        console.log(error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchAllAdminJobs();
  }, [dispatch]); // Include dispatch in dependency array

  return { loading }; // Return loading state
};

export default useGetAdminJobs;
