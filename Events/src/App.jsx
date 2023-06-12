import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleEvent = (event) => {
    console.log(event.target);
    console.log("hey this is an event");
  };

  const onContactName = (event) => {
    console.log(event.target.value);
    setContactName(event.target.value);
  };

  const onContactNumber = (event) => {
    console.log(event.target.value);
    setContactNumber(event.target.value);
  };

  return (
    <>
      <h1>.{contactName}</h1>
      <h1>#{contactNumber}</h1>
      <div>
        <input
          type="text"
          onChange={onContactName}
          placeholder="Contact Name"
        />
        <input
          type="number"
          placeholder="Contact Number"
          onChange={onContactNumber}
        />
        <input type="file" />
        <input type="color" />

        <button onClick={handleEvent}>Submit</button>
      </div>
      {/*  , kabina , junu ,  */}
    </>
  );
}

export default App;
