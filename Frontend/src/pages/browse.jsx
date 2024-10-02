import Navbar from "@/components/navbar";
import React, { useEffect } from "react";
import Job from "@/components/job";
import Shimmer from "@/components/shimmer"; // Import Shimmer component
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "@/slices/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const Browse = () => {
  const { loading } = useGetAllJobs(); // Destructure loading from the custom hook
  const dispatch = useDispatch();
  const { allJobs } = useSelector((store) => store.jobs);

  useEffect(() => {
    return () => {
      dispatch(setSearchQuery("")); // Clear search query on unmount
    };
  }, [dispatch]);

  return (
    <div>
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results ({allJobs?.length})
        </h1>

        {/* Conditionally render shimmer or job cards */}
        {loading ? (
          <div className="grid grid-cols-3 gap-4">
            {/* Display shimmer placeholders while loading */}
            {Array.from({ length: 9 }, (_, index) => (
              <Shimmer key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {allJobs.map((job) => {
              return <Job key={job?._id} job={job} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
