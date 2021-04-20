import React from "react";
import { store } from "../store/index";
import { setWithdraw } from "../store/index";

function ButtonGroup({ technologies }) {
  const dispatchBtnAction = (e) => {
    const amount = e.target.dataset.amount;
    store.dispatch(setWithdraw(amount));
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: 100,
      }}
    >
      {technologies.map((amount, i) => (
        <button
          data-amount={amount}
          key={`btn-${i}`}
          className="hello-btn"
          onClick={dispatchBtnAction}
        >
          {amount}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;
