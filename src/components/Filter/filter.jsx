import React, { useState, useContext } from "react";
import { MovieContext } from "./../../context/movieContext";
import "./filter.css";

const Filter = () => {
  const [data, setData] = useContext(MovieContext);
  const { filters, query, movies, isLoaded } = data;

  const filtersList = [
    {
      name: "Genre",
      options: [
        {
          id: 1,
          value: "Comedy",
        },
        {
          id: 2,
          value: "Romantic",
        },
        {
          id: 3,
          value: "Thriller",
        },
      ],
    },
    {
      name: "Nation",
      options: [
        {
          id: 1,
          value: "USA",
        },
        {
          id: 2,
          value: "UK",
        },
        {
          id: 3,
          value: "Korea",
        },
      ],
    },
    {
      name: "Release Year",
      options: [
        {
          id: 1,
          value: "2009",
        },
        {
          id: 2,
          value: "2010",
        },
        {
          id: 3,
          value: "2011",
        },
      ],
    },
  ];

  return (
    <div className="filter">
      {filtersList.map((filter) => (
        <div className="filter-items">
          <label htmlFor={filter.name}>{filter.name}</label>
          <div className="select-wrapper">
            <select name={filter.name} id={filter.name}>
              <option value="all">- All -</option>
              {filter.options.map((option) => (
                <option value={option.id}>{option.value}</option>
              ))}
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filter;
