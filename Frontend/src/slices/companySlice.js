import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    singleCompany: null,
    allCompany: [],
    searchCompany: "",
    isLoading: false,
  },
  reducers: {
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setAllCompany: (state, action) => {
      state.allCompany = action.payload; // Corrected this line
    },
    setSearchCompany: (state, action) => {
      state.searchCompany = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// Export actions
export const {
  setSingleCompany,
  setAllCompany,
  setSearchCompany,
  setIsLoading,
} = companySlice.actions;

// Export reducer
export default companySlice.reducer;
