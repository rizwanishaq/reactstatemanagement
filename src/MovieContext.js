import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 12341324
    },
    {
      name: "Game",
      price: "$10",
      id: 12341321234
    },
    {
      name: "Harry sadfasfPotter",
      price: "$10",
      id: 12341323232234
    },
    {
      name: "Harry P",
      price: "$10",
      id: 1234132342141241434
    }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
