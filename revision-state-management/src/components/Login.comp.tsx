import { Input, Container, Button } from "@mui/material";

import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { UserContext } from "../store/Context/UserContext";

const LoginComponent = () => {
  const [user, setUser] = useState({ name: "", password: "" });
  const [state, dispatch] = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "login", payload: { user } });
  };

  const onLogout = (e) => {
    dispatch({ type: "logout" });
  };
  return (
    <Container>
      <h1>Login</h1>
      <Wrapper onSubmit={handleSubmit}>
        <Input
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <Input
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button type="submit">Login</Button>
        <CustomButton col="black" onClick={onLogout}>
          Logout
        </CustomButton>
      </Wrapper>
    </Container>
  );
};

const Wrapper: any = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const CustomButton = styled(Button)((props) => ({
  color: props.col ? props.col : "red",
}));

export default LoginComponent;
