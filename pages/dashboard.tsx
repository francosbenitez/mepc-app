import React from "react";
import DashboardLayout from "../layouts/dashboard";
import Head from "next/head";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard - MEPC</title>
      </Head>
      <main className="wrapper">
        <div>Dashboard</div>
      </main>
    </>
  );
};

Dashboard.layout = DashboardLayout;

export default Dashboard;
