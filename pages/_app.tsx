import "../styles/global.css";
import type { AppProps } from "next/app";
import TheNavbar from "../components/global/TheNavbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TheNavbar />
      <Component {...pageProps} className="wrapper" />
    </>
  );
}

export default MyApp;
