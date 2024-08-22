import React, { useState } from "react";
import "./AppNavbar.css";

const AppNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <div>
      <div
        className={`sidebar ${showSidebar ? "d-block" : "d-none"}`}
        id="sidebar"
      >
        <button className="btn btn-secondary" onClick={toggleSidebar}>
          Close Sidebar
        </button>
      </div>

      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div
          style={{
            width: "25px",
            marginRight: "10px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
          className="hamburger-div"
        >
          <svg
            viewBox="0 0 12 12"
            enable-background="new 0 0 12 12"
            id="Слой_1"
            version="1.1"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <rect
                  fill="#fff"
                  height="1"
                  width="11"
                  x="0.5"
                  y="5.5"
                ></rect>{" "}
                <rect fill="#fff" height="1" width="11" x="0.5" y="2.5"></rect>{" "}
                <rect fill="#fff" height="1" width="11" x="0.5" y="8.5"></rect>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>

        <a className="navbar-brand main-logo" href="#">
          Startups.com
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item  nav-mid-field">
              <a className="nav-link" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item   nav-mid-field">
              <a className="nav-link" href="#community">
                Community
              </a>
            </li>
            <li className="nav-item  nav-mid-field">
              <a className="nav-link" href="#library">
                Library
              </a>
            </li>
            <li className="nav-item nav-mid-field">
              <a className="nav-link" href="#products">
                Products
              </a>
            </li>
          </ul>

          <button className="ml-2 sign-in">Sign In</button>
          <button className="ml-2 sign-in">Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default AppNavbar;
