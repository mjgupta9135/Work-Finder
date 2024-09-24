import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Jobs from "./pages/Jobs";
import Browse from "./pages/browse";
import Profile from "./pages/profile";
import JobDetails from "./components/jobDetails";
import Companies from "./pages/admin/companies";
import AdminJobs from "./pages/admin/adminJobs";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/details/:id",
    element: <JobDetails />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },

  //admin side route
  {
    path: "admin/companies",
    element: <Companies />,
  },
  {
    path: "admin/jobs",
    element: <AdminJobs />,
  },
]);
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
