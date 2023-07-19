import { createContext, useContext, useState } from "react";
import "./App.css";

const ValueContext = createContext(0);

const ValueProvider = ({ children }) => {
  return <ValueContext.Provider value={0}>{children}</ValueContext.Provider>;
};

function App() {
  return (
    <ValueProvider>
      <ReactComponentExample />
    </ValueProvider>
  );
}

const ReactComponentExample = () => {
  const value = useContext(ValueContext);

  console.log(value);

  return <h1>{value}</h1>;
};

export default App;
