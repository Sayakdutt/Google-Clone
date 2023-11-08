import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { SEARCH_SUGGESTIONS_API } from "../utils/api";
import { IoIosSearch } from "react-icons/io";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

// let speech;
// if (window.webkitSpeechRecognition || window.SpeechRecogniton) {
//   let speechRecognition =
//     window.SpeechRecognition || window.webkitSpeechRecognition;
//   speech = new speechRecognition();
//   speech.lang = "en-GB";
//   speech.continous = true;
// } else {
//   speech = null;
// }

const SearchInput = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const [suggestions, setSuggesstions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // const [isListening, setIsListening] = useState(false);
  // const [voiceText, setVoiceText] = useState("");

  // const listen = () => {
  //   setIsListening(!isListening);
  //   if (isListening) {
  //     speech.stop();
  //   } else {
  //     speech.start();
  //     speech.continous = true;
  //     speech.onresult = (event) => {
  //       console.log(event);
  //       setVoiceText(event.results[event.results.length - 1][0].transcript);
  //     };
  //   }
  // };

  // const openVoiceSearch = () => {
  //   setVoiceSearch(true);
  // };
  // const closeVoiceSearch = () => {
  //   setVoiceSearch(false);
  // };

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
    }, 300);

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
    <div className="flex flex-col items-center justify-center">
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
            className="h-6 w-6 cursor-pointer hover:shadow-c hover:scale-95 transition"
            src={ImageIcon}
          />
        </div>
      </div>
      <div className="flex flex-shrink justify-center">
        {showSuggestions && (
          <ul className="w-full sm:w-[300px] md:w-[584px] absolute outline-none bg-white rounded-b-lg px-4 z-10 hover:border-0">
            {suggestions.map((s, index) => (
              <li
                key={index}
                className="font-bold py-2 hover:bg-gray-400 hover:rounded-lg  cursor-pointer "
                onClick={() => navigate(`/${s}/${1}`)}
              >
                <IoIosSearch className="relative inline mx-2" />
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/*{voiceSearch ? (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-2 rounded w-72">
            <div className="flex flex-wrap items-center justify-center gap-20">
              <h1 className="font-semibold text-center text-xl text-gray-700">
                Recording...
              </h1>
              <button
                className="text-lg text-black pb-1 h-10 w-10 hover:bg-red-500 hover:text-white rounded-full font-bold"
                onClick={() => closeVoiceSearch()}
              >
                X
              </button>
            </div>
            <p className="text-center text-gray-700 m-5 ">{voiceText}</p>

            <div className="flex flex-col m-3 items-center">
              <img
                src={MicIcon}
                alt="MicIcon"
                className={`h-12 w-12 bg-black/[0.5] m-3 py-2 border border-black/25 rounded-full 
                          ${
                            isListening
                              ? "bg-red-400 animate-pulse"
                              : "bg-white"
                          }`}
                onClick={listen}
              />
            </div>
            <div className="text-center">
              <button className="px-5 py-2 bg-black/[0.5] text-white rounded hover:bg-red-400 ">
                Stop
              </button>
            </div>
          </div>
        </div>
      ) : null}*/}
    </div>
  );
};

export default SearchInput;
