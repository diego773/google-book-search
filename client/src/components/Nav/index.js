import { Link } from "react-router-dom";
import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link
        to="/"
        className={
          window.location.pathname === "/" || window.location.pathname === "/"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Google Books
      </Link>
      <div className="navbar-nav">
        <Link
          to="/savedbooks"
          className=
          {window.location.pathname === "/savedbooks"
            ? "nav-link active"
            : "nav-link"
          }
        >
          Saved Books
        </Link>
      </div>
    </nav>
  );
}

export default Nav;


