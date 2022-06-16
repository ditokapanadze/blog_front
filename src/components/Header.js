import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <header className="flex container drop-shadow-sm bg-white px-3 py-4 w-full justify-between align-center fixed top-0">
      <div>LOGO</div>
      <ul className="flex  justify-between w-2/3 md:w-1/2 ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li className="flex align-center ">
          {" "}
          <div className="flex justify-center  items-center">
            <Link to="/register">
              <FaUser />
            </Link>{" "}
          </div>
        </li>{" "}
        <li className="flex align-center ">
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            <FaSignInAlt />
          </div>
        </li>
      </ul>
    </header>
  );
}

export default Header;
