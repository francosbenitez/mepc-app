import React from "react";
import Image from "next/image";
import Head from "next/head";
import { GetServerSideProps } from "next";
import ArticlesService from "../../services/ArticlesService";
import MainLayout from "../../layouts/main";

const Articles = ({ articles }: { articles: any }) => {
  console.log("articles", articles);
  return (
    <>
      <Head>
        <title>Artículos - MEPC</title>
      </Head>
      <main className="wrapper">
        <div className="container mx-auto pt-20">
          <h1 className="text-center text-3xl font-mb">Nuestros artículos</h1>
          {/* Add a filter here! */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Card */}
            {articles.data.map((item: Record<string, any>) => (
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg"
                key={item.id}
              >
                {/* <Image
                  width="100"
                  height="100"
                  layout="responsive"
                  objectFit="contain"
                  src="/images/ocean.jpeg"
                  alt=""
                /> */}
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-gray-700 text-base">{item.content}</p>
                </div>
                {item.tags.length > 0 && (
                  <>
                    {item.tags.map((item: any) => (
                      <div className="px-6 pt-4 pb-2" key={item.tag.id}>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #{item.tag.name}
                        </span>
                      </div>
                    ))}
                  </>
                )}
              </div>
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
