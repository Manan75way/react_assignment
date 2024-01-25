import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";

const BasicLayout = () => {
  const token = useAppSelector((state) => state.users.token);
  console.log(token);

  return token ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default BasicLayout;
