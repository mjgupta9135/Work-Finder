import { createBrowserRouter } from "react-router-dom";
import App from "@/App"; // Main App component
import Login from "@/pages/login";
import Signup from "@/pages/signup";
import Home from "@/pages/home";
import Jobs from "@/pages/Jobs";
import Browse from "@/pages/browse";
import Profile from "@/pages/profile";
import JobDetails from "@/components/jobDetails";
import Companies from "@/pages/admin/companies";
import AdminJobs from "@/pages/admin/adminJobs";
import CreateCompany from "@/components/admin/createCompany";
import CompanySetup from "@/components/admin/companySetup";
import PostJob from "@/pages/admin/postJob";
import JobApplicants from "@/components/admin/jobApplicants";
import ProtectedRoute from "@/components/admin/protectedRoute"; // Ensure it's imported
import { CompanyShimmer } from "@/components/shimmer";
import { JobShimmer } from "@/components/shimmer";

const useRoute = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />, // Main layout wrapping all routes
      children: [
        {
          path: "/", // Home page
          element: <Home />,
        },
        {
          path: "/shimmer",
          element: <JobShimmer />,
        },
        {
          path: "/login", // Login page
          element: <Login />,
        },
        {
          path: "/signup", // Signup page
          element: <Signup />,
        },
        {
          path: "/jobs", // Jobs page
          element: <Jobs />,
        },
        {
          path: "/details/:id", // Job details page
          element: <JobDetails />,
        },
        {
          path: "/browse", // Browse page
          element: <Browse />,
        },
        {
          path: "/profile", // User profile page
          element: <Profile />,
        },
        // Admin Routes
        {
          path: "admin",
          children: [
            {
              path: "companies",
              element: (
                <ProtectedRoute>
                  <Companies />
                </ProtectedRoute>
              ),
            },
            {
              path: "companies/create",
              element: (
                <ProtectedRoute>
                  <CreateCompany />
                </ProtectedRoute>
              ),
            },
            {
              path: "companies/:id",
              element: (
                <ProtectedRoute>
                  <CompanySetup />
                </ProtectedRoute>
              ),
            },
            {
              path: "jobs",
              element: (
                <ProtectedRoute>
                  <AdminJobs />
                </ProtectedRoute>
              ),
            },
            {
              path: "jobs/create",
              element: (
                <ProtectedRoute>
                  <PostJob />
                </ProtectedRoute>
              ),
            },
            {
              path: "jobs/:id/applicants",
              element: (
                <ProtectedRoute>
                  <JobApplicants />
                </ProtectedRoute>
              ),
            },
          ],
        },
      ],
    },
  ]);

  return appRouter;
};

export default useRoute;
