import React from "react";
import DashboardLayout from "../../../layouts/dashboard";
import Head from "next/head";

const Users = () => {
  return (
    <>
      <Head>
        <title>Users - MEPC</title>
      </Head>
      <main className="wrapper">
        <div className="pt-20 text-center text-2xl">Usuarios</div>
      </main>
    </>
  );
};

Users.layout = DashboardLayout;

export default Users;
