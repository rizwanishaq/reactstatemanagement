import React from "react";
import "./App.css";

import { MovieProvider } from "./MovieContext";
import MovieList from "./MovieList";
import Nav from "./Nav";
import AddMovie from "./AddMovie";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
