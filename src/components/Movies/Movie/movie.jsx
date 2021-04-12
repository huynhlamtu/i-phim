import React from "react";
import "./movie.css";

export default function Movie({ movie }) {
  const {
    title,
    poster,
    rental_rate,
    rental_duration,
    film_id,
    description,
  } = movie;
  return (
    <div className="movie">
      <img
        src={
          poster
            ? poster
            : "https://bochickenstore.com/storage/large/ban-tai-khoan-netfli_1604812119.jpg"
        }
        alt=""
      />
      <div className="movie-info">
        <h4>{title}</h4>
        <p>
          {rental_rate} ({rental_duration})
        </p>
        <p>{film_id}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
