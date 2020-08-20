import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Jumbotron({ page }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{fontSize: '20px'}}>
        <div className="container-fluid p-0">
          <div className="row" style={{width: '100%'}}>
            <div className="col-auto">
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
            </div>
            <div className="ml-auto py-2">
              <SocialIcons />
            </div>
          </div>
        </div>
      </nav>
    <div
      style={{ clear: "both", textAlign: "center", backgroundColor: "#f8f9fa"}}
      className="jumbotron pt-0"
    >
      <div className="row">
        <div className="col-6">
          <div className="greeting pt-4 ml-auto mr-auto">
            <div><b>Hello!</b></div>
            <div>I am Liza Poliachenko</div>
            <div style={{fontSize: '20px'}}>I am a full-stack web developer</div>
          </div>
        </div>
        <div className="col-6"><img className="avatar" src="img/avatar.jpg" /></div>
      </div>
    </div>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="ml-auto mr-auto mb-2">
      <span className="mr-2"><b>Follow me:</b></span>
      <a href="https://www.linkedin.com/in/liza/" className="social-icon fa fa-linkedin" target="_blank"></a>
      <a href="https://github.com/liza-p" className="social-icon fa  fa-github" target="_blank"></a>
      <a href="https://www.instagram.com/liyourlp/" className="social-icon fa  fa-instagram" target="_blank"></a>
    </div>
  );
}

export default Jumbotron;