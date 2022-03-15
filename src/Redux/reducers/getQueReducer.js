export const initialState = {
  thisquestion: {},
};

export const GET_THIS_QUESTION_DATA = "GET_THIS_QUESTION_DATA";

function getQueReducer(state = initialState, action) {
  switch (action.type) {
    case GET_THIS_QUESTION_DATA:
      return { ...state };

    default:
      return state;
  }
}

export default getQueReducer;
