import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
const langKey = useSelector((store)=> store?.config?.lang);

  return (
    <div className="pt-[10%] flex justify-center relative">
      <form className=" bg-black w-1/2 ">
        <input
          type="text"
          className="p-3 m-4 border-2 border-cyan- w-9/12"
          placeholder={lang[langKey]?.gptSearchPlaceHolder}
        />
        <button className="py-2 px-4 w-2/12 bg-red-700 text-white m-2 rounded-lg ">
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
