import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    password: "",
    date: "",
  },
  reducers: {
    login(state, action) {
      const { payload } = action;
      return {
        ...state,
        name: payload.user.name,
        password: payload.user.password,
        date: new Date().toLocaleTimeString(),
      };
    },
    logout(state) {
      return {
        ...state,
        name: "",
        password: "",
        date: new Date().toLocaleTimeString(),
      };
    },
  },
});

export const { login, logout } = UserSlice.actions;

export const UserReducer = UserSlice.reducer;
