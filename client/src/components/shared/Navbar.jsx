import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="navbar-brand">
        Book Search
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/saved">
            Saved
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/search">
            Search
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
