import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	startDate: null,
	endDate: null,
	selectedPage: null,
};

export const filters = createSlice({
	name: "filters",
	initialState,
	reducers: {
		setAnalyticsFilter: (state, { payload }) => {
			state[payload.type] = payload.payload;
		},
	},
});

export const { setAnalyticsFilter } = filters.actions;

export default filters.reducer;
