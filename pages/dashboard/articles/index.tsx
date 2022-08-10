import React from "react";
import DashboardLayout from "../../../layouts/dashboard";
import Head from "next/head";

const Articles = () => {
  return (
    <>
      <Head>
        <title>Articles - MEPC</title>
      </Head>
      <main className="wrapper">
        <div>Articles</div>
      </main>
    </>
  );
};

Articles.layout = DashboardLayout;

export default Articles;
