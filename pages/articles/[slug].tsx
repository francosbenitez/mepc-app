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
      <main className="py-16 min-h-screen w-11/12 mx-auto">
        <p className="text-5xl text-center py-4">{article.title}</p>
        <p className="text-2xl text-center py-4">{article.content}</p>
        <p>
          <span className="underline">Autores</span>: {article.author.username}
        </p>
        <div className="text-center pt-8">
          <p className="text-2xl">Comments</p>
          {/* I leave space here for _posting_ comments */}
          {article.comment.length > 0 ? (
            <>
              {article.comment.map((item: any) => (
                <div
                  className="text-left border border-black h-20 rounded flex"
                  key={item.id}
                >
                  <p>{item.name}</p>
                  <p className="self-center">{item.text}</p>
                </div>
              ))}
            </>
          ) : (
            <p>No hay comentarios</p>
          )}
        </div>
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
