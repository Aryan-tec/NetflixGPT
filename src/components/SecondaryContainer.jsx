import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    movies && (
      <div className=" bg-gray-950">
        <div className="-mt-52 pl-9 relative z-40 ">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />

          <MovieList
            title={"UpComing Movies"}
            movies={movies?.upComingMovies}
          />
          <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
