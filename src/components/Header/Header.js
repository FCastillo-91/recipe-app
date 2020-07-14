import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"} className="heading-title h1 text-white">
        My Pantry
      </Link>
    </div>
  );
};

export default Header;
