import React, { useState, useContext, useEffect } from "react";
import { MovieContext } from "./../../context/movieContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const Header = () => {
  const apiEndPoint = "http://localhost:3030/api/films";
  const [data, setData] = useContext(MovieContext);

  const [navStyle, setNavStyle] = useState({});

  const { filters, query, movies, isLoaded } = data;

  // const getSearchedMovies;
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY < 200) {
        const style = { backgroundColor: "#06121e" };
        setNavStyle(style);
      } else if (window.scrollY > 200) {
        const style = { backgroundColor: "purple", opacity: 0.85 };
        setNavStyle(style);
      }
    };
  }, []);

  const onChange = (e) => {
    const newQuery = e.currentTarget.value;
    const updatedData = { ...data, query: newQuery };
    setData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...data, movies: null, isLoaded: false };
    setData(newData);
    setTimeout(async () => {
      const res = await fetch(apiEndPoint + `?page=${1}&search=${query}`);
      const movies = await res.json();
      const updatedData = { ...data, movies, isLoaded: true };
      setData(updatedData);
    }, 1000);
  };

  return (
    <div className="navbar-wrapper" style={navStyle}>
      <div className="navbar">
        <div className="navbar-left">
          <a href="/" className="home">
            <FontAwesomeIcon icon={faCameraRetro} />
          </a>
          <form onSubmit={handleSubmit} className="search">
            <input
              type="text"
              value={query}
              onChange={onChange}
              className="search-input"
              placeholder="Search..."
            />
            <button className="search-btn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <a href="#" className="nav-items">
              Phim le
            </a>
            <a href="#" className="nav-items">
              Phim bo
            </a>
            <a href="#" className="nav-items">
              Tat ca phim
            </a>
            <a href="#" className="nav-items">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
