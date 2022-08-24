import "../styles/global.css";
import type { AppProps } from "next/app";
import LayoutsTypes from "../types/layouts";
import { ReactElement } from "react";
import { wrapper } from "../store";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadingBar from "@/components/global/LoadingBar";

type AppLayoutProps = AppProps & {
  Component: LayoutsTypes;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, [router.events]);

  const Layout =
    Component.layout || ((children: ReactElement) => <>{children}</>);

  return (
    <>
      {loading ? <LoadingBar /> : ""}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
