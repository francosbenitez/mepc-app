import type { NextPage } from "next";
import Head from "next/head";
import HomeHero from "../components/home/HomeHero";
import HomeAbout from "../components/home/HomeAbout";
// import HomeCollaboration from "../components/home/HomeCollaboration";

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
      {/* <div className="redes text-center">
        <h5>Seguinos en las redes:</h5>
        <a href="" target="_blank" rel="noreferrer">
          <i className="fab fa-2x fa-facebook-f"></i>
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <i className="fab fa-2x fa-instagram"></i>
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <i className="fab fa-2x fa-youtube"></i>
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <i className="fab fa-2x fa-linkedin-in"></i>
        </a>
      </div> */}
      {/* <HomeCollaboration /> */}
    </>
  );
};

export default Home;
