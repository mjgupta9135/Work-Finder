import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/slices/jobSlice";
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
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchQuery(selectedValue));
  }, [selectedValue, dispatch]);
  return (
    <div className="w-full bg-white p-2 rounded-md ">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData?.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg">{data?.filterType}</h1>
            {data?.array.map((item, idx) => {
              const itemId = `r${index}-${idx}`; // Declare inside curly braces

              return (
                <div className="flex items-center space-x-2 my-3" key={itemId}>
                  {" "}
                  {/* Use unique key */}
                  <RadioGroupItem
                    value={item}
                    id={itemId}
                    className="border-black"
                  />
                  <Label htmlFor={itemId}>{item}</Label>{" "}
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
