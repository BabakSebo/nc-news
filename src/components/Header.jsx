import React from "react";
import { Link } from "react-router-dom";
import logo from "./n_logo.jpeg";

export const Header = () => {
  return (
    <div>
      <Link to={"/"}>
        <img className="logo" src={logo} alt="letter N as the logo" />
      </Link>
      <h1>NC-News</h1>
    </div>
  );
};
