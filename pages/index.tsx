import type { NextPage } from "next";
import Head from "next/head";
import HomeHero from "../components/home/HomeHero";
import HomeAbout from "../components/home/HomeAbout";
import HomeCollaboration from "../components/home/HomeCollaboration";

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
      <HomeCollaboration />
    </>
  );
};

export default Home;
