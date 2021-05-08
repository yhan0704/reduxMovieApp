import "./App.css";
import React, { useEffect } from "react";
import { fetchingMovie } from "./Redux/actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state.fetchedMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingMovie());
  }, [dispatch]);

  return (
    <div>
      {state.map((movie) => (
        <p>{movie.id}</p>
      ))}
    </div>
  );
}

export default App;
