import React from "react";
import DashboardLayout from "@/layouts/dashboard";
import Head from "next/head";
import AuthService from "@/services/AuthService";
import Image from "next/image";
import { useState, useEffect } from "react";

const Users = () => {
  const [error, setError] = useState<Record<string, any>>({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = (await AuthService.users()).data;
        setUsers(users);
      } catch (err: any) {
        console.log("err.response.data", err.response.data);
        setError(err.response.data);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <Head>
        <title>Users - MEPC</title>
      </Head>
      <main className="wrapper px-20">
        <div className="py-16 text-center text-2xl">Usuarios</div>
        {Object.keys(error).length > 0 ? (
          <>{error.error}</>
        ) : (
          <>
            {users.map((user: Record<string, any>) => (
              <div className="relative pb-5" key={user.id}>
                <div>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-sky-500 text-white">
                    <Image
                      width="100"
                      height="100"
                      src="/images/ocean.jpeg"
                      alt=""
                    />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {user.username}
                  </p>
                </div>
                <div className="mt-2 ml-16 text-base text-gray-500">
                  {user.email}
                </div>
              </div>
            ))}
          </>
        )}
      </main>
    </>
  );
};

Users.layout = DashboardLayout;

export default Users;
