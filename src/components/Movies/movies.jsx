import React, { useEffect, useState, useContext } from "react";
import Movie from "./Movie/movie";
import "./movies.css";
import Pagination from "../Pagination/pagination";
import { MovieContext } from "./../../context/movieContext";

export default function Movies() {
  const [data, setData] = useContext(MovieContext);

  const { filters, query, movies, isLoaded } = data;

  const apiEndPoint = "http://localhost:3030/api/films";

  useEffect(() => {
    const newData = { ...data, movies: null, isLoaded: false };
    setData(newData);

    setTimeout(async () => {
      const currentPage = filters
        ? filters.currentPage
          ? filters.currentPage
          : 1
        : 1;

      const res = await fetch(apiEndPoint + `?page=${currentPage}`);
      const movies = await res.json();

      const updatedData = {
        ...data,
        movies,
        isLoaded: true,
      };
      setData(updatedData);
    }, 500);
  }, [filters]);

  const onNext = () => {
    const newFilters = { ...filters, currentPage: filters.currentPage + 1 };
    const newData = { ...data, filters: newFilters };
    setData(newData);
  };

  const onPrev = () => {
    const newFilters = { ...filters, currentPage: filters.currentPage - 1 };
    const newData = { ...data, filters: newFilters };
    setData(newData);
  };

  const onPage = (e) => {
    const newFilters = { ...filters, currentPage: e.currentTarget.innerHTML };
    const newData = { ...data, filters: newFilters };
    setData(newData);
  };

  if (!movies || !movies.data)
    return (
      <div className="movies">
        {isLoaded && query && query.length > 0 && <h3>No movies founds</h3>}
      </div>
    );

  return (
    <React.Fragment>
      <div className="movies">
        {movies && movies.data.map((movie) => <Movie movie={movie} />)}
      </div>
      <div>
        <Pagination
          currentPage={movies.current_page}
          totalPage={movies.total_page}
          onNext={onNext}
          onPrev={onPrev}
          onPage={onPage}
        />
      </div>
    </React.Fragment>
  );
}
