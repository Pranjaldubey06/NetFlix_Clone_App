import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setLanguageOpen(false);
  };

  return (
    <nav className="absolute top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent text-white px-6 py-4">
      <div className="flex justify-between items-center relative">
      
        <Link to="/">
          <h1 className="text-red-600 text-4xl md:text-5xl font-bold tracking-wide">NETFLIX</h1>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          
          <div className="relative">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="flex items-center bg-black/60 border border-gray-500 px-3 py-1 rounded"
            >
              🌐 {language}
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </button>

            {languageOpen && (
              <ul className="absolute top-full left-0 mt-1 bg-black text-white border border-gray-600 rounded w-full z-30">
                <li
                  onClick={() => handleLanguageChange("English")}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                >
                  English
                </li>
                <li
                  onClick={() => handleLanguageChange("Hindi")}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                >
                  Hindi
                </li>
              </ul>
            )}
          </div>

  
          <Link
            to="/signin"
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
          >
            Sign In
          </Link>
        </div>


        <div className="md:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden bg-black/90 px-6 py-4 rounded shadow z-40">
        
          <div className="relative">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="flex items-center bg-black/60 border border-gray-500 px-3 py-2 rounded w-full justify-between"
            >
              🌐 {language}
              <ChevronDownIcon className="w-4 h-4" />
            </button>

            {languageOpen && (
              <ul className="mt-2 bg-black text-white border border-gray-600 rounded z-30">
                <li
                  onClick={() => handleLanguageChange("English")}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                >
                  English
                </li>
                <li
                  onClick={() => handleLanguageChange("Hindi")}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                >
                  Hindi
                </li>
              </ul>
            )}
          </div>

    
          <Link
            to="/signin"
            className="bg-red-600 px-4 py-2 text-center rounded hover:bg-red-700"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
