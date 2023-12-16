const initialState = {
  details: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return {
        details: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
