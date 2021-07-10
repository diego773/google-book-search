import { Link } from "react-router-dom";
import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar">
      <Link
        to="/"
        className={ 
          window.location.pathname === "/" || window.location.pathname === "/"
            ? "nav-link active nav"
            : "nav-link nav"
        }
        className="nav"
      >
        Google Books
      </Link>
      <div className="navbar-nav saved link">
        <Link
          to="/savedbooks"
          className=
          {window.location.pathname === "/savedbooks"
            ? "nav-link active"
            : "nav-link"
          }
          className="saved"
        >
          Saved Books
        </Link>
      </div>
    </nav>
  );
}

export default Nav;


