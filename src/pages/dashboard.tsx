import React from "react";
import { useAppDispatch } from "../store/store";
import { deleteUser } from "../store/reducers/userReducer";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    localStorage.removeItem("user");
    dispatch(deleteUser());
  };

  return (
    <div>
      <button onClick={handleSubmit}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
