import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={{ textAlign: "center" }}>
      <header>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <Link to="/">
                <img src="/logo.png" alt="logo" />
              </Link>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <Link to={"/"}>FAQ</Link>
                </li>
                <li>
                  <Link to={"/Signup"}>Instructor</Link>
                </li>

                <li>
                  <Link to={"/"}>Download</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;