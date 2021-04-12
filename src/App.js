import React from "react";
import Header from "./components/Header/header";
import "./App.css";
import Movies from "./components/Movies/movies";
import { route } from "react-router-dom";
import Footer from "./components/footer/footer";
import { MovieProvider } from "./context/movieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Header />
        <Movies />
        <Footer />
      </div>
    </MovieProvider>
  );
}

export default App;
