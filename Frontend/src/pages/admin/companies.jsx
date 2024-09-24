import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import CompaniesTable from "@/components/admin/CompaniesTable";
import { useNavigate } from "react-router-dom";

const companies = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10 ">
        <div className="flex items-center justify-between my-5">
          <Input className="w-fit" placeholder="Filter By Name"></Input>
          <Button
            onClick={() => navigate("/admin/companies/create")}
            variant="outline"
            className="bg-black text-white"
          >
            New Company
          </Button>
        </div>

        <CompaniesTable />
      </div>
    </>
  );
};

export default companies;
