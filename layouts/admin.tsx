import type { LayoutProps } from "../types/layouts";
import TheSidebar from "../components/global/TheSidebar";

const AdminLayout: LayoutProps = ({ children }) => {
  return (
    <>
      <TheSidebar />
      {children}
    </>
  );
};

export default AdminLayout;
