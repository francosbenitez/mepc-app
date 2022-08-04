import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

const TheNavbar = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <header className={styles["header"]}>
      <div className={styles["header-content"]}>
        <nav className={styles["nav"]}>
          {/* <Link href="/" className={styles["nav-logo"]}> */}
          {/* <Image width="40" height="40" src="/icons/logo.svg" alt="" /> */}
          <p className="self-center font-bold">MEPC</p>
          {/* </Link> */}
          <ul
            className={`${styles["nav-list"]} ${
              clicked ? styles["nav-active"] : ""
            }`}
          >
            {/* <li>
              <Link href="/documents"> QUIÉNES SOMOS </Link>
            </li> */}
            <li>
              <Link href="/articles"> ARTÍCULOS </Link>
            </li>
            {/* <li>
              <Link href="/resources"> Recursos </Link>
            </li> */}
          </ul>
          <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Publicá
          </button>
          <div
            className={`${styles["nav-btn"]} ${
              clicked ? styles["toggle"] : ""
            }`}
            onClick={() => setClicked(!clicked)}
          >
            <div className={styles["line-1"]}></div>
            <div className={styles["line-2"]}></div>
            <div className={styles["line-3"]}></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TheNavbar;
