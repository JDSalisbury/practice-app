const initialState = {
  pokemon: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_POKEMON_SUCCESS":
      return {
        ...state,
        pokemon: action.data
      };

    default:
      return state;
  }
};
