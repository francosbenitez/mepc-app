import React from "react";
import DashboardLayout from "../layouts/dashboard";
import Head from "next/head";

const Users = () => {
  return (
    <>
      <Head>
        <title>Users - MEPC</title>
      </Head>
      <main className="wrapper">
        <div>Users</div>
      </main>
    </>
  );
};

Users.layout = DashboardLayout;

export default Users;
