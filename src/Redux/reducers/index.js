import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducers from "./errorReducers";
import questions from "../question/questionReducers";
import userQuestionReducers from "./userQuestionReducers";
import getQueReducer from "./getQueReducer";

export default combineReducers({
  auth: authReducers,
  errors: errorReducers,
  dsa: questions,
  userQuestions: userQuestionReducers,
  quest: getQueReducer,
});
