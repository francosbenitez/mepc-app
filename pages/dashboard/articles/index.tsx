import React, { useState, useEffect } from "react";
import DashboardLayout from "@/layouts/dashboard";
import Head from "next/head";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import ArticlesService from "@/services/ArticlesService";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const Articles = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log("content", content);
  }, [content]);

  const { userInfo } = useSelector((state: any) => state.userReducer);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const userId = userInfo.user.id;

      const data = {
        title: title,
        slug: title.replace(/\s+/g, "-").toLowerCase(),
        content: content,
        userId: userId,
      };

      await ArticlesService.create(data);

      setTitle("");
      setContent("");
    } catch (errors: any) {
      console.log("errors", errors.response.data);
    }
  };

  return (
    <>
      <Head>
        <title>Articles - MEPC</title>
      </Head>
      <main className="wrapper">
        <div className="pt-20 text-center text-2xl">Subí un artículo</div>
        <div className="p-8">
          <form onSubmit={handleSubmit}>
            <label>
              Título
              <div className="relative flex mb-3">
                <input
                  type="text"
                  className="h-10 sm:h-full border border-primary w-full outline-0 rounded p-2"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
            </label>
            <label>
              Contenido
              <ReactQuill theme="snow" value={content} onChange={setContent} />
            </label>
            <button
              className="rounded btn bg-primary text-white p-2 px-16 border-white my-8 mx-auto flex"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

Articles.layout = DashboardLayout;

export default Articles;
