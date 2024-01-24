import "./App.css";
import { useAppSelector } from "./store/store";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  // const {name,email,age}  = useAppSelector(state=> state.users)

  return (
    <div>
      <Register/>
    </div>
  );
}

export default App;
