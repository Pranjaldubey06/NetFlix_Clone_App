import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  return (
    <AppContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);