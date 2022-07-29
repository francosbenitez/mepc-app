import type { NextPage } from "next";
import Head from "next/head";
import HomeHero from "../components/HomeHero";
import HomeAbout from "../components/HomeAbout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Home | Movimiento Estudiantil por la Psicología Científica (MEPC)
        </title>
      </Head>
      <HomeHero />
      <HomeAbout />
    </>
  );
};

export default Home;
