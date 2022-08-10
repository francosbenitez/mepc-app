import type { LayoutProps } from "../types/layouts";
import { useState } from "react";
import TheSidebar from "../components/dashboard/TheSidebar";
import TheNavbar from "../components/dashboard/TheNavbar";

const DashboardLayout: LayoutProps = ({ children }) => {
  const [toggleClass, setToggleClass] = useState("");

  const onToggle = () => {
    if (toggleClass === "active") {
      setToggleClass("");
    } else {
      setToggleClass("active");
    }
  };
  return (
    <div>
      <TheNavbar onToggleClick={() => onToggle()} />
      <div className="wrapper">
        <div className="sidebar-container">
          <TheSidebar toggleClass={toggleClass} />
        </div>
        <div id="content" className={toggleClass}>
          <div className="layout-Container">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
