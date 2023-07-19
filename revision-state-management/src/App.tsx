import "./App.css";
import HomeComponent from "./components/Home.comp";
import LoginComponent from "./components/Login.comp";
import { UserContextProvider } from "./store/Context/UserContext";

function App() {
  return (
    <UserContextProvider>
      {/* <LoginComponent /> */}
      <HomeComponent />
    </UserContextProvider>
  );
}

export default App;
