import React from "react";
import logo from "./logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

type Props = {};

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  return (
    <nav className="container relative mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img src={logo} alt="LOGO" />
          </Link>
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-darkBlue">
              Search
            </Link>
          </div>
        </div>
        {isLoggedIn() ? (
          <div className="hidden items-center space-x-6 text-black lg:flex">
            <div className="hover:text-darkBlue">Welcome, {user?.userName}</div>
            <a
              onClick={logout}
              className="rounded bg-lightGreen px-8 py-3 font-bold text-white hover:opacity-70"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="hidden items-center space-x-6 text-black lg:flex">
            <Link to="login" className="hover:text-darkBlue">
              Login
            </Link>
            <Link
              to="/register"
              className="rounded bg-lightGreen px-8 py-3 font-bold text-white hover:opacity-70"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
