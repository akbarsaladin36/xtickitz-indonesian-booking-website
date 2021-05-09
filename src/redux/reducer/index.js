import { combineReducers } from "redux";
import auth from "./auth";
import movie from "./movie";
import user from "./user";

export default combineReducers({
  auth,
  movie,
  user,
});
