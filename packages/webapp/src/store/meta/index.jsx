import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  selectedCompany: null,
  selectedClient: null,
  selectedSuggestionYear: null,
  upgradePlan: false,
  changePages: false,
  changePlan: false,
  companyClients: [],
};

export const metaSlice = createSlice({
  name: "meta",
  initialState,
  reducers: {
    setCompany: (state, action) => {
      state.selectedCompany = action.payload;
    },
    setClient: (state, action) => {
      state.selectedClient = action.payload;
    },
    setCompanyClients: (state, action) => {
      state.companyClients = action.payload;
    },
    setSuggestionYear: (state, action) => {
      state.selectedSuggestionYear = action.payload;
    },
    setUpgradePlan: (state, action) => {
      state.upgradePlan = action.payload;
    },
    setChangePlan: (state, action) => {
      state.changePlan = action.payload;
    },
    setChangePages: (state, action) => {
      state.changePages = action.payload;
    },
    resetMetaData: () => initialState,
  },
});

export const {
  setCompany,
  setClient,
  resetMetaData,
  setCompanyClients,
  setSuggestionYear,
  setUpgradePlan,
  setChangePlan,
  setChangePages,
} = metaSlice.actions;

export default metaSlice.reducer;
