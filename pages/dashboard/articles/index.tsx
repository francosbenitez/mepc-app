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
  const { userInfo, role } = useSelector((state: any) => state.userReducer);

  const [articles, setArticles] = useState<any>([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      if (role === "Admin") {
        const data = (await ArticlesService.indexAll(1)).data;
        setArticles(data);
      } else {
        const data = (await ArticlesService.index(1)).data;
        setArticles(data);
      }
    };
    fetchArticles();
  }, []);

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

  const handlePublish = async (articleId: string) => {
    try {
      await ArticlesService.publish(articleId);
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
        {role === "Admin" && (
          <>
            <div className="pt-20 text-center text-2xl">
              Todos los artículos
            </div>

            <div className="p-8">
              {articles.data != null && articles.data.length > 0 ? (
                <table className="w-full">
                  <thead>
                    <tr className="bg-white">
                      <th className="p-1 border border-text">#</th>
                      <th className="p-1 border border-text">Title</th>
                      <th className="p-1 border border-text">Published</th>
                      <th className="p-1 border border-text">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="text-center">
                    {articles.data.map((item: Record<string, any>) => (
                      <tr className="bg-white" key={item.id}>
                        <td className="p-1 border border-text">{item.id}</td>
                        <td className="p-1 border border-text">{item.title}</td>
                        <td className="p-1 border border-text">
                          {item.published ? "✓" : "X"}
                        </td>
                        <td className="p-1 border border-text">
                          <a className="btn bg-red-500 rounded mx-auto p-1 text-white">
                            Borrar
                          </a>
                          <a
                            className="btn bg-green-500 rounded mx-auto p-1 text-white"
                            onClick={() => handlePublish(item.id)}
                          >
                            Publicar
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <>Loading...</>
              )}
            </div>
          </>
        )}

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
