import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Banglore", "Hyderabad", "Pune", "Mumbai", "Chennai"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Data Science",
      "Graphic Designer",
      "Full Stack Developer",
      "Devops Engineer",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42k-100k", "100k to 500k"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-2 rounded-md ">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.array.map((item, index) => (
              <div className="flex items-center space-x-2 my-3" key={index}>
                <RadioGroupItem value={item} className="border-black" />
                <Label>{item}</Label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
