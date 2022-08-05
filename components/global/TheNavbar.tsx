import React from "react";

const TheNavbar = () => {
  return (
    <header className="w-full mx-auto p-5 sm:px-0 navbar">
      <div className="container m-auto">
        <ul className="flex justify-end">
          <li className="p-2 self-center">Artículos</li>
          <li className="p-2 self-center">
            <button className="rounded btn bg-primary text-white p-2 border-white">
              Publicá
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default TheNavbar;
