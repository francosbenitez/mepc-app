/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

// import React, { Component } from "react";
// import "./StyleSheets/Navbar.css";
//  import { Link } from "react-router-dom";
import Link from "next/link";

const TheSidebarNavbar = (props) => {
  return (
    <div className="header-section" id="sticky">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="nav-title">
            <Link href="/dashio-admin/dashboard">Dashio-Admin</Link>
          </div>

          <div onClick={() => props.onToggleClick()}>
            {/* <i className="fa fa-bars" aria-hidden="true"></i> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="#313131"
            >
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            </svg>
          </div>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>
        </div>
      </nav>
    </div>
  );
};

export default TheSidebarNavbar;
