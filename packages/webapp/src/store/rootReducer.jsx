import { combineReducers } from "redux";
import theme from "./theme/themeSlice";
import auth from "./auth";
import base from "./base";
import meta from "./meta";
import socialmedia from "./socialmedia";
import filters from "./analytics";

const rootReducer = (asyncReducers) => (state, action) => {
	const combinedReducer = combineReducers({
		theme,
		auth,
		base,
		socialmedia,
		meta,
		filters,
		...asyncReducers,
	});
	return combinedReducer(state, action);
};

export default rootReducer;
