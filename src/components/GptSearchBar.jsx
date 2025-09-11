// src/components/GptSearchBar.jsx
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import model from "../utils/gemini"; // Import the model instead of client
import ReactMarkdown from "react-markdown";
import lang from "../utils/languageConstant";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store?.config?.lang);
  const searchText = useRef(null);
  const [resultContent, setResultContent] = useState("");
  const dispatch = useDispatch();

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const queryText = searchText?.current?.value.trim();
    if (!queryText) return;

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query '" +
      queryText +
      "'. Only give names of 5 movies, comma separated like the example result given ahead. Example result : Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    try {
      const response = await model.generateContent(gptQuery);
      const text = response.response.text();

      setResultContent(text);
      const gptMovies = text.split(",");
      console.log(gptMovies);

      //for each movie i will search TMDB API

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      //[promise, promise, promise, promise, promise]

      const tmdbResults = await Promise.all(promiseArray);

      console.log(tmdbResults);

      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      console.error("Error fetching Gemini response:", error);
      setResultContent("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex flex-col items-center relative">
      <form
        className="bg-black bg-opacity-80 p-6 rounded-lg shadow-lg w-full max-w-2xl flex flex-wrap justify-center items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-3 m-2 border-2 border-cyan-500 rounded-md w-full sm:w-3/4 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-900 text-white placeholder-gray-400 transition duration-200"
          placeholder={lang[langKey]?.gptSearchPlaceHolder}
        />
        <button
          className="py-3 px-6 m-2 bg-red-700 text-white rounded-md hover:bg-red-600 transition-colors duration-200 w-full sm:w-auto"
          onClick={handleGptSearchClick}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
