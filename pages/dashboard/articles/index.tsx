import React, { useState, useEffect } from "react";
import DashboardLayout from "@/layouts/dashboard";
import Head from "next/head";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const Articles = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("value", value);
  }, [value]);

  return (
    <>
      <Head>
        <title>Articles - MEPC</title>
      </Head>
      <main className="wrapper">
        <div className="pt-20 text-center text-2xl">Subí un artículo</div>
        <div className="p-8">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
          <button className="rounded btn bg-primary text-white p-2 px-16 border-white my-8 mx-auto flex">
            Enviar
          </button>
        </div>
      </main>
    </>
  );
};

Articles.layout = DashboardLayout;

export default Articles;
