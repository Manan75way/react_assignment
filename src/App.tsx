import "./App.css";
import { useAppSelector } from "./store/store";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import BasicLayout from "./layout/BasicLayout";
import AuthLayout from "./layout/AuthLayout";
import Dashboard from "./pages/dashboard";

function App() {
  // const {name,email,age}  = useAppSelector(state=> state.users)

  return (
    <div>
      <Routes>
        <Route element={<BasicLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
