import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const routeMatch = useRouteMatch();
  console.log(routeMatch);

  return (
    <div>
      <MoviesList movies={movies} />
           <Route exact path={routeMatch.url}>
        <h3>Choose a movie from the list</h3>
      </Route>
      <Route path={`${routeMatch.url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}
export default MoviesPage;