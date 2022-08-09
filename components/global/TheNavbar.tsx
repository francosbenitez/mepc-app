import React from "react";
import Logo from "../../public/icons/logo.svg";
import Link from "next/link";

const TheNavbar = () => {
  return (
    <header className="w-full mx-auto p-5 sm:px-0 navbar">
      <div className="container m-auto">
        <ul className="flex">
          <Logo className="w-12 h-12 flex justify-start self-center fill-primary" />
          <div className="flex justify-end w-full">
            <li className="p-2 self-center">
              <Link href="/articles">Artículos</Link>
            </li>
            <li className="p-2 self-center">
              <button className="rounded btn bg-primary text-white p-2 border-white">
                <Link href="/login">Publicá</Link>
              </button>
            </li>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default TheNavbar;
