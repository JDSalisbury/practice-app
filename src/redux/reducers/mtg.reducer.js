const initialState = {
  cards: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_CARD_BY_NAME":
      return {
        ...state,
        cards: action.data
      };

    default:
      return state;
  }
};
