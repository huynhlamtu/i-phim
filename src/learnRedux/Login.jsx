import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { store } from "../store";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { username: name, formSubmitted } = store.getState();

  const onUsernameChange = (e) => {
    setUsername(e.currentTarget.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    const action = {
      type: "LOGIN",
      user,
    };
    store.dispatch(action);
  };

  if (formSubmitted && name) return <Redirect to="/main" />;

  return (
    <div style={{ margin: 200 }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 40 }}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="off"
            value={username}
            onChange={onUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="username">password</label>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="off"
            value={password}
            onChange={onPasswordChange}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
