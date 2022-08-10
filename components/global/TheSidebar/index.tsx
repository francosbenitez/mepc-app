import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Sidebar(props) {
  const [active, setActive] = useState("");
  const router = useRouter();

  useEffect(() => {
    setActive(router.pathname);
  }, [router.pathname, active]);

  return (
    <div
      className="sidebar-container border-right main-sidebar"
      id="sticky-sidebar"
    >
      <nav id="sidebar" className={props.toggleClass}>
        <ul className="list-unstyled components">
          <li className={active === "/dashboard" ? "active" : null}>
            <a href="/dashboard">
              <div className="menu-icon">
                <i className="fa fa-home nav_icon" aria-hidden="true"></i>
              </div>
              <span className="menu-title">Dashboard</span>
            </a>
          </li>

          <li className={active === "/users" ? "active" : null}>
            <Link href="/users">
              <a>
                <div className="menu-icon">
                  <i
                    className="fa fa-file-text-o nav_icon"
                    aria-hidden="true"
                  ></i>
                </div>
                <span className="menu-title">Users</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
