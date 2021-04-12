import React, { useEffect, useState, useContext } from "react";
import Movie from "./Movie/movie";
import "./movies.css";
import Pagination from "../Pagination/pagination";
import { MovieContext } from "./../../context/movieContext";

export default function Movies() {
  const rootMovies = [];
  // const [totalPage, setTotalPage] = useState(0);
  const [movies, setMovies] = useContext(MovieContext);

  const apiEndPoint = "http://localhost:3030/api/films";

  const [filters, setFilters] = useState({
    currentPage: 1,
  });

  useEffect(async () => {
    const res = await fetch(apiEndPoint + `?page=${filters.currentPage}`);
    const resMovies = await res.json();
    setMovies(resMovies);
  }, [filters]);

  const onNext = () => {
    setFilters({
      ...filters,
      currentPage: filters.currentPage + 1,
    });
  };

  const onPrev = () => {
    setFilters({
      ...filters,
      currentPage: filters.currentPage - 1,
    });
  };

  const onPage = (e) => {
    setFilters({
      ...filters,
      currentPage: +e.target.innerHTML,
    });
  };

  return (
    <React.Fragment>
      <div className="movies">
        {movies.data && movies.data.map((movie) => <Movie movie={movie} />)}
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
