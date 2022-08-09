import Head from "next/head";
import TheAbout from "../components/home/TheAbout";
import MainLayout from "../layouts/main";
import { GetServerSideProps } from "next";
import ArticlesService from "../services/ArticlesService";
import TheCard from "../components/global/TheCard";

const Home = ({ articles }: { articles: any }) => {
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
        <section className="container m-auto">
          <div className="py-16">
            <p className="text-2xl font-mb my-16">Artículos recientes</p>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {articles.data.map((item: Record<string, any>) => (
                <TheCard article={item} key={item.id} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const articles = (await ArticlesService.index(1)).data;
  return {
    props: {
      articles,
    },
  };
};
Home.layout = MainLayout;

export default Home;
