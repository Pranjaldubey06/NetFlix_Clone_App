import React from "react";
import { useAppContext } from "../context/AuthContext";

const MovieCard = ({ movie }) => {
  const { addToFavorites } = useAppContext();

  return (
    <div className="min-w-[180px] bg-gray-800 rounded p-3 shadow-md hover:scale-105 transition">
      <img src={movie.image} alt={movie.title} className="rounded" />
      <div className="mt-2 text-white font-semibold text-lg">{movie.title}</div>
      <button
        onClick={() => addToFavorites(movie)}
        className="mt-2 bg-red-600 px-3 py-1 rounded text-white text-sm hover:bg-red-700"
      >
        Add to Favorites
      </button>
    </div>
  );
};

export default MovieCard;
