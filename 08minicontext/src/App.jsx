import "./App.css";
import UserContextProvider from "./context/USerContextProvider";
import Login from "./components/Profile";
import Profile from "./components/Login";

function App() {
  return (
    <UserContextProvider>
      <h1 className="bg-black text-white">useContext in React</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
