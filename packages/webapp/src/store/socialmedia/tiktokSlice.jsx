import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  access_token: "",
  userId: null,
  authority: [],
};

export const socialMediaSlice = createSlice({
  name: "socialmedia/tiktok",
  initialState,
  reducers: {
    setTikTokDetail: (state, action) => {
      state.access_token = action.payload.access_token;
      state.userId = action.payload.userId;
    },
  },
});

export const { setTikTokDetail } = socialMediaSlice.actions;

export default socialMediaSlice.reducer;
