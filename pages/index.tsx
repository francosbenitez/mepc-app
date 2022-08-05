import type { NextPage } from "next";
import Head from "next/head";
import TheAbout from "../components/home/TheAbout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Movimiento Estudiantil por la Psicología Científica (MEPC)
        </title>
        <meta
          name="description"
          content="Una organización independiente de estudiantes y graduades, que posee como fin promover el pensamiento crítico y la psicología científica."
        />
      </Head>
      <main className="wrapper">
        <TheAbout />
      </main>
    </>
  );
};

export default Home;
