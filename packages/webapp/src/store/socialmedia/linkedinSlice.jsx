import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	access_token: "",
	userId: null,
	authority: [],
};

export const socialMediaSlice = createSlice({
	name: "socialmedia/linkedin",
	initialState,
	reducers: {
		setLinkedInDetail: (state, action) => {
			state.access_token = action.payload.access_token;
			state.userId = action.payload.userId;
		},
	},
});

export const { setLinkedInDetail } = socialMediaSlice.actions;

export default socialMediaSlice.reducer;
