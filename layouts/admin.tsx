import type { LayoutProps } from "../types/pageWithLayout";
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
