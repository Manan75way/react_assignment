import "./App.css";
import { useAppSelector } from "./store/store";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";

function App() {
  // const {name,email,age}  = useAppSelector(state=> state.users)

  return (
    <div>
      <Login/>
    </div>
  );
}

export default App;
