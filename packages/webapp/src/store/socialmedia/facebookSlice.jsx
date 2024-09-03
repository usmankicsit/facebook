import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	access_token: "",
	userId: null,
	authority: [],
};

export const socialMediaSlice = createSlice({
	name: "socialmedia/facebook",
	initialState,
	reducers: {
		setFacebookDetail: (state, action) => {
			state.access_token = action.payload.access_token;
			state.userId = action.payload.userId;
		},
	},
});

export const { setFacebookDetail } = socialMediaSlice.actions;

export default socialMediaSlice.reducer;
