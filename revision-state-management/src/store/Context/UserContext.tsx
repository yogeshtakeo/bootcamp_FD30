import { createContext, useReducer, useState } from "react";

interface IUserContext {
  name: string;
  password: string;
  date: string;
}
const initialValue: IUserContext = {
  name: "",
  password: "",
  date: "",
};

export const UserContext = createContext(initialValue);

interface Iprops {
  children: any;
}
export const UserContextProvider = ({ children }: Iprops) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};

const reducer = (state, action) => {
  const { type, payload } = action;
  if (type === "login") {
    return {
      ...state,
      name: payload.user.name,
      password: payload.user.password,
      date: new Date().toLocaleTimeString(),
    };
  } else if (type === "logout") {
    return {
      ...state,
      name: "",
      password: "",
      date: "",
    };
  }
  return state;
};
