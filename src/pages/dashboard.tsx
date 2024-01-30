import React from "react";
import { useAppDispatch } from "../store/store";
import { deleteUser } from "../store/reducers/userReducer";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(deleteUser());
    localStorage.removeItem("user");
  };

  return (
    <div>
      <button onClick={handleSubmit}>Sign Out</button>
      <Link to="/" >
        <p>Home</p>
      </Link>
    </div>
  );
};

export default Dashboard;
