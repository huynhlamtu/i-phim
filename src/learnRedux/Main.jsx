import React, { useState } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import { store } from "../store";
import { Redirect } from "react-router-dom";

const Main = () => {
  const { username } = store.getState();

  const handleLogout = () => {
    const action = {
      type: "LOGOUT",
    };
    store.dispatch(action);
  };

  if (!username) return <Redirect to="/login" />;
  return (
    <React.Fragment>
      <button onClick={handleLogout}>Logout</button>
      <HelloWorld
        key={1}
        name={store.getState().name}
        totalAmount={store.getState().totalAmount}
      />
      <ButtonGroup key={2} technologies={[10000, 5000]} />
    </React.Fragment>
  );
};

export default Main;
