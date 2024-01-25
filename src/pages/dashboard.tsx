import React from "react";
import { useAppDispatch } from "../store/store";
import { deleteUser } from "../store/reducers/userReducer";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(deleteUser());
    localStorage.removeItem("user");
  };

  return (
    <div>
      <button onClick={handleSubmit}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
