import { combineReducers } from "@reduxjs/toolkit";
import facebook from "./facebookSlice";
import instagram from "./instagramSlice";
import linkedIn from "./linkedinSlice";
import tiktok from "./tiktokSlice";
import socialMediaPages from "./socialmediaPagesSlice";

const reducer = combineReducers({
  facebook,
  instagram,
  linkedIn,
  tiktok,
  socialMediaPages,
});

export default reducer;
