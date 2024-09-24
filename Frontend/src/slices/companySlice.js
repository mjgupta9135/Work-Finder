import { createSlice } from "@reduxjs/toolkit";
const companySlice = createSlice({
  name: "company",
  initialState: {
    sigleCompany: null,
  },
  reducers: {
    setSingleCompany: (state, action) => {
      state.sigleCompany = action.payload;
    },
  },
});

export const { setSingleCompany } = companySlice.actions;
export default companySlice.reducer;
