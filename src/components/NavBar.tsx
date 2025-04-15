import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav style={{ padding: "2rem", background: "grey", color: "beige" }}>
      <Link to="/" style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>
        🚀 Home
        Spaceflight
           News
         Contact
      </Link>
    </nav>
  );
};

export default NavBar;
