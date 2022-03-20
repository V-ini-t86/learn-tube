import { GET_ALL_QUESTIONS_CLICKED_By_USER } from "../question/questionTypes";

const initialState = {
  userItems: [],
};

function userQuestionReducers(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_QUESTIONS_CLICKED_By_USER:
      return { ...state, userItems: action.payload.questions };

    default:
      return state;
  }
}

export default userQuestionReducers;
