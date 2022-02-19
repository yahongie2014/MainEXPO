/** @format */
import { combineReducers } from "redux";
import user from "./user";
import language from "./language";
import LayoutDirection from "./LayoutDirection";

const rootReducer = combineReducers({
  user,
  language,
  LayoutDirection,
});

export default rootReducer;
