import Service from "./service";

export const getPokemon = data => dispatch => {
  console.log(data)
  Service.get(dispatch, `pokemon/${data}/`, {
    init: "GET_POKEMON",
    success: "GET_POKEMON_SUCCESS",
    error: "GET_POKEMON_FAILED"
  });
};
