import { database } from "../store";
import { initialState } from "../store/index";

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      const user = handleLogin(action.user);
      return {
        ...state,
        username: user.username,
        totalAmount: user.totalAmount,
        formSubmitted: true,
      };
    case "LOGOUT":
      state = { ...initialState };
      return {
        ...state,
      };
    case "WITHDRAW":
      return {
        ...state,
        totalAmount: state.totalAmount - action.amount,
      };
    case "WITHDRAW_ALL":
      return {
        ...state,
        totalAmount: 0,
      };
    default:
      return state;
  }
}

const handleLogin = (user) => {
  const { data } = database;
  return data.filter(
    (u) => u.username === user.username && u.password === user.password
  )[0];
};

export default reducer;
