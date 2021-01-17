import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">   
      <a className="navbar-brand">Alexandria Kelly</a>      
      <ul className="navbar-nav w-100 justify-content-end">       
        
        <Link to="/" className={
          window.location.pathname === "/" || 
          window.location.pathname === "/home"
          ? "nav-link active" : "nav-link" } >
          About Me
        </Link>
          
        <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        > Portfolio </Link>

        <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        > Contact </Link>

      </ul>    
    </nav>
  );
}
