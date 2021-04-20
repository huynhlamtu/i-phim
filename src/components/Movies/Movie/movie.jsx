import React from "react";
import "./movie.css";

export default function Movie({ movie }) {
  const {
    title,
    poster,
    rental_rate,
    release_year,
    film_id,
    length,
    description,
    rating,
  } = movie;

  return (
    <div class="movie">
      <div class="poster">
        <img
          src={
            poster
              ? poster
              : "https://bochickenstore.com/storage/large/ban-tai-khoan-netfli_1604812119.jpg"
          }
          alt=""
        />
      </div>

      <div class="details">
        <h2>{title}</h2>
        <h4>{release_year}</h4>

        <div className="tags info-details">
          <span>${rental_rate}</span>
          <span>{rating}</span>
          <span>{length}min</span>
        </div>

        <div class="info">
          <p className="description">{description}</p>
        </div>

        <div class="tags categories">
          <span class="animation">Action</span>
          <span class="aventure">Romantic</span>
          <span class="aventure">Thriller</span>
        </div>
      </div>
    </div>
  );
}
