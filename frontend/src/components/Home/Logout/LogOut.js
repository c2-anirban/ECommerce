import React from "react";
import { logout } from "../../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

const LogOut = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      logout({
        loggedIn: false,
      })
    );
  };
  return (
    <div>
      <h1>
        {/* <span className="user_name">Anirban</span> */}
        <button className="logout_button" onClick={handleClick}>
          {" "}
          Logout
        </button>
      </h1>
    </div>
  );
};

export default LogOut;
