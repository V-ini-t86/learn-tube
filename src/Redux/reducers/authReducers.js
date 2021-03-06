import { SET_CURRENT_USER, USER_LOADING } from "../actions/types";
import isEmpty from "is-empty";

const initialState = {
  isAuthenticated: localStorage.getItem("user") ? true : false,
  user: localStorage.getItem("user") ? localStorage.getItem("user") : {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !isEmpty(action.payload),
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
