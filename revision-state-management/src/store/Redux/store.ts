import { configureStore } from "@reduxjs/toolkit";
import { store } from "react-redux";
import { UserReducer } from "./slice/User.slice";

const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export default store;
