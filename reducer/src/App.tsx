import { createContext, useContext, useState } from "react";
import "./App.css";

const ValueContext = createContext(0);

const ValueProvider = ({ children }) => {
  return <ValueContext.Provider></ValueContext.Provider>;
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

  return <>{value}</>;
};

export default App;
