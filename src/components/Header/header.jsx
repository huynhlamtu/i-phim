import React, { useState } from "react";

const Header = () => {
  const [query, setQuery] = useState("");

  const onChange = (e) => {
    console.log(e.currentTarget.value);
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    console.log("submitted!");
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={onChange} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Header;
