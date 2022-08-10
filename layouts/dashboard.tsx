import type { LayoutProps } from "../types/layouts";
import TheSidebar from "../components/global/TheSidebar";
import { useState } from "react";
import TheSidebarNavbar from "../components/global/TheSidebarNavbar";

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
      <TheSidebarNavbar onToggleClick={() => onToggle()} />
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
