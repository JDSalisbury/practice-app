import { combineReducers } from "redux";
import mtg from "./mtg.reducer";
import pkmn from "./pkmn.reducer";

const rootReducer = combineReducers({ mtg, pkmn });

export default rootReducer;
