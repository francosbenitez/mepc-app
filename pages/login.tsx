import React, { useState } from "react";
import BlankLayout from "../layouts/blank";
import Head from "next/head";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../store/user/userActions";
import type { AppDispatch } from "../store";
import EyeLined from "../public/icons/eye-lined.svg";
import EyeOffLined from "../public/icons/eye-off-lined.svg";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const { isLoggedIn } = useSelector((state: any) => state.userReducer);

  // const check =
  //   userToken != null ? userToken : userInfo != null ? userInfo.token : null;

  if (isLoggedIn) {
    router.push("/dashboard");
  }

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  // const { loading, error } = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch<AppDispatch>();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // const form = {
      const data = {
        username: username,
        email: email,
        password: password,
      };

      // let formData = new FormData();
      // Object.entries(form).forEach(([key, value]) => {
      //   formData.append(key, value);
      // });

      // await dispatch(userLogin(formData)).unwrap();
      await dispatch(userLogin(data)).unwrap();
      router.push("/dashboard");
      // showModal();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <Head>
        <title>Ingresar - MEPC</title>
      </Head>
      <div className="flex bg-body min-h-screen w-full bg-white">
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <Image
            className="h-screen"
            src="/images/login.png"
            width="100"
            height="100"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="min-h-full my-auto px-16 w-full">
          <div className=" absolute top-0 right-0 mr-6 mt-6">
            <Image
              width="50"
              height="50"
              className="mx-auto h-12 w-auto"
              src="/icons/logo.svg"
              alt=""
            />
          </div>
          <div className="w-96 mx-auto">
            <div className="text-center">
              <h2 className="mt-6 text-center text-3xl">Ingresá a tu cuenta</h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="username" className="sr-only">
                    Usuario
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                    placeholder="Usuario"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="pass-wrapper">
                  <label htmlFor="password" className="sr-only">
                    Contraseña
                  </label>
                  <input
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="Contraseña"
                    value={password}
                    type={passwordShown ? "text" : "password"}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <i onClick={togglePasswordVisiblity}>
                    {!passwordShown ? <EyeLined /> : <EyeOffLined />}
                  </i>{" "}
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
