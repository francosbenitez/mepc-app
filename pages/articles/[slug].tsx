import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import ArticlesService from "../../services/ArticlesService";
import MainLayout from "../../layouts/main";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/router";

const Article = ({ article }: { article: any }) => {
  const { isLoggedIn } = useSelector((state: any) => state.userReducer);
  const [comment, setComment] = useState("");

  const router = useRouter();

  const handleCommentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const data = {
        name: "",
        text: comment,
      };

      await ArticlesService.comment(article.id, data);
      router.push(`/articles/${article.slug}`);
      setComment("");
    } catch (err: any) {
      console.log("err.response.data", err.response.data);
    }
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      setComment(target.value);
    }
  };

  return (
    <>
      <Head>
        <title>{`${article.title} | Psievidencia`}</title>
      </Head>
      <main className="container py-16 min-h-screen w-11/12 mx-auto">
        <p className="text-5xl text-center py-4">{article.title}</p>
        <p className="text-2xl text-center py-4">{article.content}</p>
        <p>
          <span className="underline">Autores</span>: {article.user.username}
        </p>
        <div className="text-center pt-8">
          <p className="text-2xl mb-6">Comentarios</p>
          <form
            onSubmit={handleCommentSubmit}
            className="text-left border-2 border-primary h-20 rounded flex mb-6"
          >
            {!isLoggedIn ? (
              <p className="w-full my-auto">
                Tienes que loguearte para comentar
              </p>
            ) : (
              <input
                className="w-full"
                onChange={handleCommentChange}
                value={comment}
              />
            )}
            <button className="bg-primary text-white px-6" type="submit">
              Publicar
            </button>
          </form>
          {article.comment.length > 0 ? (
            <>
              {article.comment.map((item: any) => (
                <div
                  className="text-left shadow-md border-2 h-20 rounded flex mb-6"
                  key={item.id}
                >
                  <p className="pl-3 pt-3 font-mb">{item.user.username}</p>
                  <p className="self-center pl-3 pt-3">{item.text}</p>
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
