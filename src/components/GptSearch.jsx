import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { HOME_BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed inset-0">
        <img
          src={HOME_BG}
          alt="Netflix logo"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
