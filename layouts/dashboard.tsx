import type { LayoutProps } from "../types/layouts";
import { useState } from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";

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
      <DashboardNavbar onToggleClick={() => onToggle()} />
      <div className="wrapper">
        <div className="sidebar-container">
          <DashboardSidebar toggleClass={toggleClass} />
        </div>
        <div id="content" className={toggleClass}>
          <div className="layout-Container">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
