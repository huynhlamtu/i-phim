import { createStore } from "redux";
import reducer from "../reducers";

export function setWithdraw(amount) {
  return {
    type: "WITHDRAW",
    amount: +amount,
  };
}

export const database = {
  data: [
    {
      userid: 1,
      username: "chanest",
      password: "123456",
      totalAmount: 5142311,
    },
    {
      userid: 2,
      username: "athur",
      password: "123456",
      totalAmount: 868121,
    },
    {
      userid: 3,
      username: "paul",
      password: "123456",
      totalAmount: 868121,
    },
  ],
};

export const initialState = {
  username: "",
  totalAmount: 0,
  formSubmitted: false,
};

export const store = createStore(reducer, initialState);
