
import axios from "axios";

// this function (fetchDsa) need not be pure 

export const fetchDsa = () => {

  return (dispatch) => { // here dispatch is recieved by default
    dispatch(fetchQuestionsBegin())
    axios
      .get('/dsa')
      .then(response => {
        // response.data is the users
        const users = response.data.result;
            // console.log(users);
            dispatch(fetchQuestionsSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchQuestionsFailure(error.message))
      })
  }
}



export const fetchQuestionsBegin = () => ({
    type: "FETCH_QUESTIONS_BEGIN"
  });
  
  export const fetchQuestionsSuccess = items => ({
    type: "FETCH_QUESTIONS_SUCCESS",
    payload: { items }
  });
  
  export const fetchQuestionsFailure = error => ({
    type: "FETCH_QUESTIONS_FAILURE",
    payload: { error }
  });

