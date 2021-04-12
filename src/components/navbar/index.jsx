import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="content">
        <Link to="/" className="brand">
          TODO
        </Link>
        <div className="body">
          <Link to="/" onClick={() => console.log("clicked!")}>
            Todo
          </Link>
          <Link to="/done" onClick={() => console.log("clicked!")}>
            Done
          </Link>
          <Link to="/contact" onClick={() => console.log("clicked!")}>
            Contact
          </Link>
        </div>
        <Link to="/create">
          <button className="button">New Task</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
