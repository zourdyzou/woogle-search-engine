import React from "react";
import { Link } from "react-router-dom";

import { Search } from "./Search";
interface Props {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<Props> = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-5 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen ">
        <Link to="/">
          <p className="text-2xl  font-bold text-white py-2 px-2 rounded  dark:text-gray-900">
            <span className="text-purple-800">W</span>
            <span className="text-yellow-400">o</span>
            <span className="text-yellow-400">o</span>
            <span className="text-green-400">g</span>
            <span className="text-indigo-600">l</span>
            <span className="text-red-500">e</span> 🔎
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? "💡 Light" : "🌙 Dark"}
        </button>
      </div>
      <Search />
    </div>
  );
};
