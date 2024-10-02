import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterCard from "@/components/filterCard";
import Job from "@/components/job";
import Shimmer from "@/components/shimmer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { setSearchQuery } from "@/slices/jobSlice";

const Jobs = () => {
  const dispatch = useDispatch();
  const { loading } = useGetAllJobs(); // Destructure loading
  const { allJobs, searchQuery } = useSelector((store) => store.jobs);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Fetch and update filtered jobs whenever allJobs or searchQuery changes
  useEffect(() => {
    const filterJob = () => {
      if (searchQuery) {
        return allJobs.filter((job) => {
          return (
            job.title
              .toLowerCase()
              .includes(searchQuery.toLowerCase().trim()) ||
            job.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase().trim()) ||
            job.location
              .toLowerCase()
              .includes(searchQuery.toLowerCase().trim())
          );
        });
      }
      return allJobs; // Show all jobs when searchQuery is empty
    };

    // Set filtered jobs based on the search query
    setFilteredJobs(filterJob());
  }, [allJobs, searchQuery]);

  return (
    <div>
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCard />
          </div>

          {loading ? (
            <div className="flex-1 h-[88vh] pb-5">
              <Shimmer />
            </div>
          ) : filteredJobs.length <= 0 ? (
            <span>Job Not Found</span>
          ) : (
            <div className="flex-1 h-[88vh] pb-5 overflow-y-auto scrollbar-hide">
              <div className="grid grid-cols-3 gap-4">
                {filteredJobs.map((job) => (
                  <div key={job?._id}>
                    <Job job={job} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
