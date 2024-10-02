import { setAllCompany, setIsLoading } from "@/slices/companySlice";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllCompanies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllCompany = async () => {
      dispatch(setIsLoading(true)); // Set loading to true before fetching
      try {
        const res = await axios.get(`${COMPANY_API_END_POINT}/get`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllCompany(res.data.companies));
        } else {
          console.error("Failed to fetch companies: ", res.data.message);
        }
      } catch (error) {
        console.error("Error fetching companies: ", error.message);
      } finally {
        dispatch(setIsLoading(false)); // Set loading to false after fetching
      }
    };

    fetchAllCompany();
  }, [dispatch]);
};

export default useGetAllCompanies;
