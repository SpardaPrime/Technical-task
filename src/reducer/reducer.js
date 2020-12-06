import { combineReducers } from "redux";
import allusers from "./allusers";
import choseuser from "./choseuser";

const reducer = combineReducers({
  allusers,
  choseuser,
});

export default reducer;
