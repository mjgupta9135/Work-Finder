import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import FilterCard from "@/components/filterCard";
import Job from "@/components/job";
import "../index.css";
import { useSelector } from "react-redux";

const Jobs = () => {
  const { allJobs, searchQuery } = useSelector((store) => store.jobs);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Effect to initialize filteredJobs with allJobs when allJobs changes
  useEffect(() => {
    setFilteredJobs(allJobs);
  }, [allJobs]); // Runs whenever allJobs is updated

  // Effect to filter jobs based on searchQuery
  useEffect(() => {
    if (searchQuery) {
      const filterJob = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setFilteredJobs(filterJob);
    } else {
      setFilteredJobs(allJobs); // Reset to all jobs if searchQuery is empty
    }
  }, [allJobs, searchQuery]); // Runs whenever allJobs or searchQuery changes

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCard />
          </div>

          {filteredJobs?.length <= 0 ? (
            <span>Job Not Found</span>
          ) : (
            <div className="flex-1 h-[88vh] pb-5 overflow-y-auto scrollbar-hide">
              <div className="grid grid-cols-3 gap-4">
                {filteredJobs?.map((job) => (
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
