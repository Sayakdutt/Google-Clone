import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { SEARCH_SUGGESTIONS_API } from "../utils/api";
import { IoIosSearch } from "react-icons/io";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const [suggestions, setSuggesstions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();

  const searchQueryHandler = (e) => {
    if (e.key == "Enter" && searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };
  useEffect(() => {
    //make an api call after every key press
    //but if the difference between 2 aip calls is < 200ms
    // decline the API call

    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggesstions(json[1].slice(0, 7));
  };

  return (
    <div className="flex flex-col items-center">
      <div
        id="searchBox"
        className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 m-1 border border-[#dfe1e5] rounded-3xl hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0"
      >
        <AiOutlineSearch size={18} color="#9aa0a6" />
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
          value={searchQuery}
          className="grow outline-0 text-black"
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <div className="flex items-center gap-3">
          {searchQuery && (
            <IoMdClose
              size={24}
              color="#70757a"
              onClick={() => setSearchQuery("")}
            />
          )}
          <img
            className="h-6 w-6 cursor-pointer hover:shadow-c hover:rounded-lg"
            src={MicIcon}
          />
          <img
            className="h-6 w-6 cursor-pointer hover:shadow-c hover:rounded-lg"
            src={ImageIcon}
          />
        </div>
      </div>
      {showSuggestions && (
        <div className="w-full md:w-[584px] absolute outline-none bg-white rounded-b-lg shadow-lg px-4 z-10 border border-[#dfe1e5] m-12 hover:border-0 focus-within:shadow-c focus-within:border-0">
          {suggestions.map((s, index) => (
            <div
              key={index}
              className="font-bold py-2 hover:bg-gray-400 hover:rounded-lg  cursor-pointer"
              
            >
              <IoIosSearch className="relative inline mx-2" />
              <span className="hover:text-purple-600" onClick={() => setSearchQuery(s)}>{s}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
