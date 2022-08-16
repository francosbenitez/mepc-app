import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import ArticlesService from "../../services/ArticlesService";
import MainLayout from "../../layouts/main";
import TheCard from "../../components/global/TheCard";

const Articles = ({ articles }: { articles: any }) => {
  return (
    <>
      <Head>
        <title>Artículos - MEPC</title>
      </Head>
      <main className="container min-h-screen w-11/12 mx-auto">
        <div className="container mx-auto pt-20">
          <h1 className="text-center text-3xl font-mb">Nuestros artículos</h1>
          {/* Add a filter here! */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {articles.data.map((item: Record<string, any>) => (
              <TheCard article={item} key={item.id} />
            ))}
          </div>
        </div>
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

Articles.layout = MainLayout;

export default Articles;
