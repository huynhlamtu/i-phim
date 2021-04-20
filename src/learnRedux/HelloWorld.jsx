import React from "react";

const HelloWorld = ({ name, totalAmount }) => (
  <div
    style={{
      textAlign: "center",
      marginTop: 100,
    }}
  >
    <h3>Hello, {name}!</h3>
    <div>
      <h1>${totalAmount}</h1>
      <p>Total Amount</p>
    </div>
  </div>
);

export default HelloWorld;
