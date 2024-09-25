import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    singleCompany: null,
    allCompany: [],
  },
  reducers: {
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setAllCompany: (state, action) => {
      state.allCompany = action.payload; // Corrected this line
    },
  },
});

// Export actions
export const { setSingleCompany, setAllCompany } = companySlice.actions;

// Export reducer
export default companySlice.reducer;
