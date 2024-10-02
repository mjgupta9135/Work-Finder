import React from "react";

const JobCardSkeleton = () => {
  return (
    <div className="p-4 border border-gray-200 bg-gray-300 rounded-lg shadow-lg  w-[330px] h-[310px] ">
      <div className="flex justify-between animate-pulse">
        <div className="mt-2 h-6 bg-gray-400 rounded-md w-1/4  animate-pulse"></div>
        <div className="h-10 bg-gray-400 rounded-full w-11 animate-pulse"></div>
      </div>
      <div className="mt-4 h-10 bg-gray-400 rounded-md w-2/3 animate-pulse"></div>
      <div className="mt-4 h-8 bg-gray-400 rounded-md w-1/2 animate-pulse"></div>

      <div className="mt-8 flex justify-between animate-pulse">
        <div className="h-6 bg-gray-400 rounded-md w-1/5 animate-pulse"></div>
        <div className="h-6 bg-gray-400 rounded-md w-1/5 animate-pulse"></div>
        <div className="h-6 bg-gray-400 rounded-md w-1/5 animate-pulse"></div>
      </div>
      <div className="mt-3 flex justify-between animate-pulse">
        <div className="mt-4 h-8 bg-gray-400 rounded-md w-1/3 animate-pulse"></div>{" "}
        <div className="mt-4 h-8 bg-gray-400 rounded-md w-1/2 animate-pulse"></div>
      </div>
    </div>
  );
};

const shimmer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 mt-8 ">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <JobCardSkeleton key={index} />
          ))}
      </div>
    </>
  );
};

export default shimmer;

export const DescriptionShimmer = () => {
  return (
    <div className="p-4 w-full max-w-7xl mx-auto bg-gray-200  animate-pulse">
      {/* Title */}
      <div className="flex justify-between">
        <div className="h-8 bg-gray-400 rounded-md w-1/4 mb-4"></div>
        <div className="h-10 w-32 bg-gray-400 rounded-md"></div>{" "}
      </div>

      {/* Tags (Positions, Full Time, Salary) */}
      <div className="flex space-x-2 mb-4">
        <div className="h-7 w-16 bg-gray-400 rounded-md"></div>
        <div className="h-7 w-20 bg-gray-400 rounded-md"></div>
        <div className="h-7 w-14 bg-gray-400 rounded-md"></div>
      </div>

      {/* Job Description Section */}
      <div className="h-7 bg-gray-400 rounded-md w-1/4 mb-2"></div>

      {/* Individual Job Details */}
      <div className="space-y-4 mt-8">
        <div className="h-8 bg-gray-400 rounded-md w-1/3"></div>
        <div className="h-8 bg-gray-400 rounded-md w-1/3"></div>
        <div>
          <div className="h-5 mb-2 bg-gray-400 rounded-md w-1/2"></div>
          <div className="h-5 bg-gray-400 rounded-md w-1/4"></div>
          <div className="h-5 mt-2 bg-gray-400 rounded-md w-1/2"></div>
        </div>
        <div className="h-8 bg-gray-400 rounded-md w-1/6"></div>
        <div className="h-8 bg-gray-400 rounded-md w-1/3"></div>
        <div className="h-8 bg-gray-400 rounded-md w-1/4"></div>{" "}
        <div className="h-8 bg-gray-400 rounded-md w-1/5"></div>
      </div>
    </div>
  );
};

export const CompanyShimmer = () => {
  return (
    <div className="animate-pulse max-w-7xl mx-auto    overflow-hidden ">
      <div className="flex justify-between items-center p-4">
        <div className="h-8 w-40 bg-gray-300 rounded-md"></div>
        <div className="h-8 w-32 bg-gray-300 rounded-md"></div>{" "}
        <div className="h-8 w-40 bg-gray-300 rounded-md"></div>
        <div className="h-8 w-32 bg-gray-300 rounded-md"></div>
      </div>
      <div>
        <table className="min-w-full mt-5  bg-white">
          <thead>
            <tr>
              <th className="py-1 px-1 bg-gray-200"></th>
              <th className="py-1 px-1 bg-gray-200"></th>
              <th className="py-1 px-1 bg-gray-200"></th>
              <th className="py-1 px-1 bg-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            {[...Array(8)].map((_, i) => (
              <tr key={i} className="border-t   ">
                {/* Logo shimmer */}
                <td className="py-2 px-4 pt-4 mb-4 pb-4 ">
                  <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                </td>
                {/* Name shimmer */}
                <td className="py-2 px-4 pt-4">
                  <div className="h-10 w-48 bg-gray-300 rounded-md"></div>
                </td>
                {/* Date shimmer */}
                <td className="py-2 px-4 pt-4">
                  <div className="h-10 w-24 bg-gray-300 rounded-md"></div>
                </td>
                {/* Action shimmer */}
                <td className="py-2 px-4 pt-4">
                  <div className="h-10 w-16 bg-gray-300 rounded-md"></div>
                </td>{" "}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export const JobShimmer = () => {
  return (
    <div className="animate-pulse max-w-7xl mx-auto    overflow-hidden ">
      <div>
        <table className="min-w-full ml-24   bg-white">
          <tbody className="  min-w-full text-center">
            {[...Array(7)].map((_, i) => (
              <tr key={i} className=" flex  items-center min-w-full ">
                <td className="py-2 px-4 pt-4 ">
                  <div className="h-10 w-40 bg-gray-300 rounded-md"></div>
                </td>
                <td className="py-2 mx-10 px-4 pt-4 ml-44">
                  <div className="h-10 w-48 bg-gray-300 rounded-md"></div>
                </td>

                <td className="py-2 px-4 pt-4 ">
                  <div className="h-10 w-40 bg-gray-300 rounded-md"></div>
                </td>

                <td className="py-2  px-4 pt-4 ml-16">
                  <div className="h-10 px-4 w-20 bg-gray-300 rounded-md"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
