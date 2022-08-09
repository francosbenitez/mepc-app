import React from "react";
import BlankLayout from "../layouts/blank";
import Head from "next/head";
import Image from "next/image";

const Login = () => {
  return (
    <>
      <Head>
        <title>Ingresar - MEPC</title>
      </Head>
      <div className="wrapper flex justify-center">
        <div className="min-h-full pt-32 px-16 bg-white shadow-lg">
          <div className="w-96">
            <div className="text-center">
              <Image
                width="50"
                height="50"
                className="mx-auto h-12 w-auto"
                src="/icons/logo.svg"
                alt=""
              />
              <h2 className="mt-6 text-center text-3xl">Ingresá a tu cuenta</h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Correo electrónico
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                    placeholder="Correo electrónico"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Contraseña
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                    placeholder="Contraseña"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    ¿No tenés una cuenta?
                    <a
                      href="#"
                      className="font-medium text-primary hover:text-primary"
                    >
                      {" "}
                      Registrate{" "}
                    </a>
                  </label>
                </div>
                <div className="text-sm"></div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

Login.layout = BlankLayout;

export default Login;
