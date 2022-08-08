import type { LayoutProps } from "../types/layouts";
import TheNavbar from "../components/global/TheNavbar";
import TheFooter from "../components/global/TheFooter";

const MainLayout: LayoutProps = ({ children }) => {
  return (
    <>
      <TheNavbar />
      <>{children}</>
      <TheFooter />
    </>
  );
};

export default MainLayout;
