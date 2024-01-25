import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";

const AuthLayout = () => {
  const token = useAppSelector((state) => state.users.token);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthLayout;
