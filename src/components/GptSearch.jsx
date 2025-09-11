import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { HOME_BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="fixed inset-0">
        <img
          className="w-full h-full object-cover"
          src={HOME_BG}
          alt="Netflix background"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
