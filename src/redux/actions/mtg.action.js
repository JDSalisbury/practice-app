// import Service from "./service";

export const searchCardByName = data => dispatch => {
  dispatch({ type: "GET_CARD_BY_NAME", data });
};
