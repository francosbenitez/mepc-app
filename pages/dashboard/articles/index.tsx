import React from "react";
import DashboardLayout from "@/layouts/dashboard";
import Head from "next/head";

const Articles = () => {
  return (
    <>
      <Head>
        <title>Articles - MEPC</title>
      </Head>
      <main className="wrapper">
        <div className="pt-20 text-center text-2xl">Subí un artículo</div>
      </main>
    </>
  );
};

Articles.layout = DashboardLayout;

export default Articles;
