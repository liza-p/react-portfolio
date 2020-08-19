import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Jumbotron({ children, page }) {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className={`nav-item ${page === 'aboutMe' ? 'active' : ''}`}>
              <Link className="nav-link" to="/">About Me <span className="sr-only">(current)</span></Link>
            </li>
            <li className={`nav-item ${page === 'portfolio' ? 'active' : ''}`}>
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>
    <div
      style={{ height: 400, clear: "both", paddingTop: 290, textAlign: "center"}}
      className="jumbotron"
    >
      {children}
    
      
       

    </div>
    </div>
  );
}

export default Jumbotron;