import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Button } from "./UI/Button";
import { LoginForm } from "./components/Form";

function App() {
  return (
    <div className=" h-full w-full">
      <LoginForm />
    </div>
  );
}

export default App;
