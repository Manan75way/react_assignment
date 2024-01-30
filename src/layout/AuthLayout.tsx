import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { useEffect, useState } from "react";

const AuthLayout = () => {
  useEffect(() => {
    const data = localStorage.getItem("user");
    console.log(data);
  }, []);


  // const token = useAppSelector((state) => state.use
  const token = useAppSelector((state)=>state.user.token)

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthLayout;
