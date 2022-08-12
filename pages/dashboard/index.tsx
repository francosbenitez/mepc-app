import React from "react";
import DashboardLayout from "../../layouts/dashboard";
import Head from "next/head";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard - MEPC</title>
      </Head>
      <main className="wrapper">
        <div className="pt-20 text-center text-2xl">
          ¡Bienvenide al MEPC Dashboard!
        </div>
      </main>
    </>
  );
};

Dashboard.layout = DashboardLayout;

export default Dashboard;
