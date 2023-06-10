import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(25);
  console.log();

  let count  = 25 

  function increament() {
    let updated_count = count++;
    setCount(updated_count);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => increament()}>Count</button>
      <h1>Hello ! This is me</h1>
      <p>This is the dumbest person in the world , Mr Yogesh Bhattarai.</p>
    </>
  );
}

export default App;
