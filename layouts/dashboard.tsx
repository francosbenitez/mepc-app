import type { LayoutProps } from "@/types/layouts";
import { useState } from "react";
import TheSidebar from "@/components/dashboard/TheSidebar";
import TheNavbar from "@/components/dashboard/TheNavbar";
import styles from "./dashboard.module.css";
import withAuth from "@/hoc/withAuth";

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
      <div className={styles["wrapper"]}>
        <div>
          <TheSidebar toggleClass={toggleClass} />
        </div>
        <div id="content" className={toggleClass}>
          <div className={styles["container"]}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(DashboardLayout);
