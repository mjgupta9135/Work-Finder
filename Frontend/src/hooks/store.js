import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";

import jobSlice from "@/slices/jobSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    jobs: jobSlice,
  },
});
export default store;
