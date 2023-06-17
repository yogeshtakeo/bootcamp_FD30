import React, { useState } from "react";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";

export const LoginForm = () => {
  // This will contain the username
  const [username, setUsername] = useState("");

  //   This will contain the password
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    alert(`${username} is logged in with password ${password}`);
  };

  return (
    // Passing the function on the submit that will be invoked when submit button is called
    <form
      className="grid place-items-center h-full w-full"
      onSubmit={handleSubmit}
    >
      <div>
        <Input
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        />

        <Input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />

        {/* You can also use the following to submit the form just like the other one */}
        {/* <Input type="submit" value="Login" /> */}

        {/* The type submit will submit the form */}
        <Button type="submit" disabled>
          Submit
        </Button>
      </div>
    </form>
  );
};
