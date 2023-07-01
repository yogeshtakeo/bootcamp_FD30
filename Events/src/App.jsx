import { useState } from "react";
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
          onChange={onContactNumber}
          placeholder="Contact Number"
        />
        <input type="file" />
        <input type="color" />

        <button onClick={handleEvent}>Submit</button>
      </div>
    </>
  );
}

export default App;
