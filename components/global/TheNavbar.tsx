import React from "react";
import Logo from "../../public/icons/logo.svg";

const TheNavbar = () => {
  return (
    <header className="w-full mx-auto p-5 sm:px-0 navbar">
      <div className="container m-auto">
        <ul className="flex">
          <Logo className="w-12 h-12 flex justify-start self-center" />
          <div className="flex justify-end w-full">
            <li className="p-2 self-center">Artículos</li>
            <li className="p-2 self-center">
              <button className="rounded btn bg-primary text-white p-2 border-white">
                Publicá
              </button>
            </li>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default TheNavbar;
