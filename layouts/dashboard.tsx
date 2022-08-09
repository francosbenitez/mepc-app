import type { LayoutProps } from "../types/layouts";
import TheSidebar from "../components/global/TheSidebar";

const DashboardLayout: LayoutProps = ({ children }) => {
  return (
    <>
      <TheSidebar />
      {children}
    </>
  );
};

export default DashboardLayout;
