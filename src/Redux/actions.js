import { FECTHED_MOVIE } from "./actionType";

const API = process.env.REACT_APP_API_KEY;
const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=1&with_genres=10749,18&with_watch_monetization_types=flatrate`;

const fetchedMovie = (movies) => {
  return {
    type: FECTHED_MOVIE,
    payload: movies,
  };
};

export const fetchingMovie = () => {
  return (dispatch) => {
    fetch(URL)
      .then((res) => res.json())
      .then((movies) => {
        dispatch(fetchedMovie(movies));
      });
  };
};
