import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Bar">
      <div className="links-1">
        <Link className="link-o" to="/">
          Home{" "}
        </Link>

        <Link className="link-o" to="/Apple">
          Apple
        </Link>

        <Link className="link-o" to="/Sheep">
          Sheep
        </Link>
        <Link className="link-o" to="/Form">
          Form
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
