import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [data, setData] = useState([]);

  return (
    <MovieContext.Provider value={[data, setData]}>
      {props.children}
    </MovieContext.Provider>
  );
};
