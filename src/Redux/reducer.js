import { combineReducers } from "redux";
import { FECTHED_MOVIE } from "./actionType";

const fecthedMovieReducer = (state = [], action) => {
  switch (action.type) {
    case FECTHED_MOVIE:
      return action.payload.results;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  fetchedMovies: fecthedMovieReducer,
});

export default rootReducer;
