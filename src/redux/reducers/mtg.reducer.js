const initialState = {
  cards: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_CARD_BY_NAME":
      const results = [];
      const map = new Map();
      for (const item of action.data) {
        if (!map.has(item.name)) {
          map.set(item.name, true);
          results.push(item);
        }
      }
      return {
        ...state,
        cards: results
      };

    default:
      return state;
  }
};
