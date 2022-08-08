import type { LayoutProps } from "../types/pageWithLayout";
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
