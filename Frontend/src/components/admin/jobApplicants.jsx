import React from "react";
import Navbar from "../navbar";
import ApplicantsTable from "./applicantsTable";
const jobApplicants = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-xl my-5">Applicants (3)</h1>
        <ApplicantsTable />
      </div>
    </>
  );
};

export default jobApplicants;
