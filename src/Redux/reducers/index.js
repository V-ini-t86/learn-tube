import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducers from "./errorReducers";
import questions from "../question/questionReducers"

export default combineReducers({
  auth: authReducers,
  errors: errorReducers,
  dsa:questions,
});
