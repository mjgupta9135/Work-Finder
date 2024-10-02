import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import { Button } from "../ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { useSelector } from "react-redux";
import useGetCompanyById from "@/hooks/useGetCompanyById";

const companySetup = () => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });
  const params = useParams();
  const navigate = useNavigate();
  const companyId = params.id;
  useGetCompanyById(companyId);
  const { singleCompany } = useSelector((store) => store.company);
  const [loading, setLoading] = useState(false);
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  useEffect(() => {
    setInput({
      name: singleCompany?.name || "",
      description: singleCompany?.description || "",
      website: singleCompany?.website || "",
      location: singleCompany?.location || "",
      logo: singleCompany?.logo || "",
    });
  }, [singleCompany]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input?.name);
    formData.append("description", input?.description);
    formData.append("location", input?.location);
    formData.append("website", input?.website);

    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);
      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${companyId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res?.data?.success) {
        toast.success(res?.data.message);
        navigate("/admin/companies"); // Only navigate on success
      }
    } catch (error) {
      console.log(error);
      // Error handling for displaying toast notifications
      if (error.response) {
        const errorData = error.response.data;
        console.log(errorData);
        if (Array.isArray(errorData.errors)) {
          // Display each error message if errors is an array
          errorData.errors.forEach((err) => {
            toast.error(err.message);
          });
        } else if (errorData.message) {
          toast.error(errorData.message);
        } else {
          // Fallback error message
          toast.error("An unexpected error occurred");
        }
      } else if (error.request) {
        // Handle no response received
        toast.error("No response received from server");
      } else {
        // Handle error in setting up the request
        toast.error(error.message);
      }
    } finally {
      setLoading(false); // Loading ends regardless of success or error
    }
  };
  return (
    <>
      <div className="max-w-xl mx-auto my-10 border-black border p-4">
        <form onSubmit={submitHandler}>
          <div className="flex items-center gap-5 p-8 ">
            <Button
              onClick={() => navigate("/admin/companies")}
              variant="outline"
              className="flex items-center gap-2 text-gray-500 font-semibold"
            >
              <ArrowLeft />
              <span>Back</span>
            </Button>
            <h1 className="font-bold text-xl">Company Setup</h1>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Label>Company Name</Label>
              <Input
                type="text"
                name="name"
                value={input?.name}
                onChange={changeEventHandler}
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                value={input?.description}
                onChange={changeEventHandler}
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                value={input?.location}
                onChange={changeEventHandler}
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Website</Label>
              <Input
                type="text"
                name="website"
                value={input?.website}
                onChange={changeEventHandler}
              />
            </div>{" "}
            <div className="flex flex-col gap-3">
              <Label>Logo</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={changeFileHandler}
              />
            </div>
          </div>

          {loading ? (
            <Button className="w-full my-4 bg-black text-white">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button type="submit" className=" w-full my-4 bg-black text-white">
              Update
            </Button>
          )}
        </form>
      </div>
    </>
  );
};

export default companySetup;
