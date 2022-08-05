import "../styles/global.css";
import type { AppProps } from "next/app";
// import TheFooter from "../components/global/TheFooter";
// import TheNavbar from "../components/global/TheNavbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <TheNavbar /> */}
      <Component {...pageProps} className="wrapper" />
      {/* <TheFooter /> */}
    </>
  );
}

export default MyApp;
