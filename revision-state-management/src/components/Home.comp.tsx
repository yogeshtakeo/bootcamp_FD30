import styled from "@emotion/styled";
import { useContext } from "react";
import { UserContext } from "../store/Context/UserContext";

import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/Redux/slice/User.slice";
const HomeComponent = () => {
  // const [user, dispatch] = useContext(UserContext);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <h1
        onClick={() =>
          dispatch(login({ user: { name: "Yogesh", password: "bhattarai" } }))
        }
      >
        This is the Heading
      </h1>

      <DataContainer>
        <h2> This is the data</h2>

        <p>User:{user.name}</p>
        <p>password:{user.password}</p>
        <p>date:{user.date}</p>
      </DataContainer>
    </Wrapper>
  );
};

const Wrapper = styled("div")({});
const DataContainer = styled("div")({});

export default HomeComponent;
