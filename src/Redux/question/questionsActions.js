import axios from "axios";
import { getHeaders, backendServerURL } from "../../utils/config";
import { GET_ALL_QUESTIONS_CLICKED_By_USER } from "./questionTypes";

// this function (fetchDsa) need not be pure

export const fetchDsa = () => {
  return (dispatch) => {
    // here dispatch is recieved by default
    dispatch(fetchQuestionsBegin());
    axios
      .get(`${backendServerURL}/dsa`)
      .then((response) => {
        // response.data is the users
        const users = response.data.result;
        dispatch(fetchQuestionsSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchQuestionsFailure(error.message));
      });
  };
};

export const fetchAllQuestionsClickedByUser = async (dispatch, user) => {
  try {
    if (!user) {
      throw new Error("");
    }
    const { data } = await axios.get(
      `${backendServerURL}/api/question/user/${user.userId}`,
      {
        headers: getHeaders(),
      }
    );
    console.log(data);
    localStorage.setItem("user-selected-questions", JSON.stringify(data) || []);
    dispatch(fetchAllQuestions(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchAllQuestions = (items) => {
  return {
    type: GET_ALL_QUESTIONS_CLICKED_By_USER,
    payload: items,
  };
};

export const fetchQuestionsBegin = () => ({
  type: "FETCH_QUESTIONS_BEGIN",
});

export const fetchQuestionsSuccess = (items) => ({
  type: "FETCH_QUESTIONS_SUCCESS",
  payload: { items },
});

export const fetchQuestionsFailure = (error) => ({
  type: "FETCH_QUESTIONS_FAILURE",
  payload: { error },
});
