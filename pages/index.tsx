import type { NextPage } from "next";
import Head from "next/head";
import TheAbout from "../components/home/TheAbout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - MEPC</title>
        <meta
          name="description"
          content="Somos una organización independiente de estudiantes y graduades, que busca promover el pensamiento crítico y la psicología científica."
        />
      </Head>
      <main className="wrapper">
        <TheAbout />
      </main>
    </>
  );
};

export default Home;
