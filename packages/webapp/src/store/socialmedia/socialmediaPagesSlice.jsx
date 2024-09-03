import { createSlice } from "@reduxjs/toolkit";

export const initialState = { pages: [] };

export const socialMediaSlice = createSlice({
  name: "socialmedia/socialMediaPages",
  initialState,
  reducers: {
    setSocialMediaPages: (state, action) => {
      state.pages = action.payload;
    },
  },
});

export const { setSocialMediaPages } = socialMediaSlice.actions;

export default socialMediaSlice.reducer;
