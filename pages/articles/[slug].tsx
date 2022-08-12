import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import ArticlesService from "../../services/ArticlesService";
import MainLayout from "../../layouts/main";

const Article = ({ article }: { article: any }) => {
  return (
    <>
      <Head>
        <title>{`${article.title} | Psievidencia`}</title>
      </Head>
      <main className="wrapper py-16">
        <p className="text-5xl text-center py-4">{article.title}</p>
        <p className="text-2xl text-center py-4">{article.content}</p>
        <p>
          <span className="underline">Autores</span>: {article.author.username}
        </p>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const article = (await ArticlesService.detail(context.query.slug)).data;
  return {
    props: {
      article,
    },
  };
};

Article.layout = MainLayout;

export default Article;
