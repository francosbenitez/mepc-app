import React from "react";
import Logo from "../../public/icons/logo.svg";
import Link from "next/link";

const TheNavbar = () => {
  return (
    <header className="w-full mx-auto py-5 navbar">
      <div className="container w-11/12 mx-auto">
        <ul className="flex">
          <Link href="/">
            <a>
              <Logo className="w-12 h-12 flex justify-start self-center fill-primary cursor-pointer" />
            </a>
          </Link>
          <div className="flex justify-end w-full">
            <li className="p-2 self-center">
              <Link href="/articles">Artículos</Link>
            </li>
            <li className="p-2 self-center">
              <Link href="/login">
                <button className="rounded btn bg-primary text-white p-2 border-white">
                  Publicá
                </button>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default TheNavbar;
