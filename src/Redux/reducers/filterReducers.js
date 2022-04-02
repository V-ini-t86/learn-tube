const initialState = {
  search: "",
};

export const ADD_TO_FILTER = "ADD_TO_FILTER";

function fitlerReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FILTER:
      return state;

    default:
      return state;
  }
}

export default fitlerReducers;
