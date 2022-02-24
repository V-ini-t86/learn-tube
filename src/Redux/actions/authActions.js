import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";
import jwt_decode from "jwt-decode";

export const registerUser = (userData, navigate, dispatch) => {
  axios
    .post("/api/register", userData)
    .then((res) => navigate("/login")) // redirect to login on succesfull register
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Login - get user token
export const loginUser = (userData, dispatch, setAuth) => {
  axios
    .post("/api/login", userData)
    .then((res) => {
      // Save to localStorage
      // Set token to localStorage
      const { accessToken, refreshToken } = res.data;
      // localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(accessToken);
      // Decode token to get user data
      const decoded = jwt_decode(accessToken);
      // Set current user
      console.log(decoded);
      dispatch(
        setCurrentUser({ userId: decoded.aud, accessToken, refreshToken })
      );
      localStorage.setItem(
        "user",
        JSON.stringify({
          userId: decoded.aud,
          accessToken,
          refreshToken,
        })
      );
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

// User loading
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Log user out
export const logoutUser = (dispatch) => {
  // Remove token from localstorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
