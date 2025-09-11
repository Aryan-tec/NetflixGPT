import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4 mx-4 my-6 bg-black bg-opacity-85 text-white rounded-lg shadow-lg relative">
      <div className="space-y-6">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults?.[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
