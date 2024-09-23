import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import job from "@/components/job";
import jobSlice from "@/slices/jobSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    job: jobSlice,
  },
});
export default store;
