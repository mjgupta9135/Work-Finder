import React, { useEffect, useState } from "react";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CompanyShimmer } from "../shimmer";

const CompaniesTable = () => {
  useGetAllCompanies(); // Custom hook to fetch all companies
  const { isLoading, allCompany, searchCompany } = useSelector(
    (store) => store.company
  );

  const [filterCompany, setFilterCompany] = useState([]); // Initialize as an empty array
  const navigate = useNavigate();

  useEffect(() => {
    if (allCompany) {
      const filteredCompany =
        allCompany.filter((company) => {
          if (searchCompany) {
            return company?.name
              .toLowerCase()
              .includes(searchCompany?.toLowerCase());
          }
          return true;
        }) || []; // Ensure this is always an array

      setFilterCompany(filteredCompany);
    }
  }, [allCompany, searchCompany]);

  return (
    <div>
      {isLoading ? (
        <CompanyShimmer />
      ) : (
        <Table>
          <TableCaption>
            A List of your recently registered companies
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Logo</TableHead>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {allCompany?.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  You haven't registered any company yet
                </TableCell>
              </TableRow>
            ) : (
              filterCompany.map((company) => (
                <TableRow key={company?._id}>
                  <TableCell className="text-center">
                    <img
                      src={company?.logo}
                      alt={`${company?.name} Logo`}
                      className="w-10 h-10 object-cover "
                    />
                  </TableCell>
                  <TableCell className="text-center">{company?.name}</TableCell>
                  <TableCell className="text-center">
                    {new Date(company?.createdAt).toLocaleDateString() || "N/A"}
                  </TableCell>
                  <TableCell className="text-center">
                    <Popover>
                      <PopoverTrigger>
                        <MoreHorizontal />
                      </PopoverTrigger>
                      <PopoverContent className="w-28 bg-white animate-fadeInRight">
                        <div
                          onClick={() =>
                            navigate(`/admin/companies/${company?._id}`)
                          }
                          className="flex items-center gap-4 w-fit cursor-pointer"
                        >
                          <Edit2 className="w-4 " />
                          <span className="">Edit</span>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default CompaniesTable;
