import "../styles/global.css";
import type { AppProps } from "next/app";
import TheNavbar from "../components/global/TheNavbar";
import TheFooter from "../components/global/TheFooter";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TheNavbar />
      <Component {...pageProps} />
      <TheFooter />
    </>
  );
}

export default MyApp;
