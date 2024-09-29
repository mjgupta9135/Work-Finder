import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "recruiter") {
      navigate("/"); // Redirect to home if the user is not a recruiter
    }
  }, [user, navigate]); // Ensure to add user and navigate in the dependency array

  return <>{children}</>; // Corrected spelling from 'childred' to 'children'
};

export default ProtectedRoute;
