import type { NextPage } from "next";
import Head from "next/head";
import TheAbout from "../components/home/TheAbout";
import MainLayout from "../layouts/main";

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
        <section className="container m-auto px-8">
          <div className="py-16">
            <p className="text-2xl font-mb">Artículos recientes</p>
          </div>
        </section>
      </main>
    </>
  );
};

Home.layout = MainLayout;

export default Home;
