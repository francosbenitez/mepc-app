import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

const TheNavbar = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.nav__logo}>
            <Image width="40" height="40" src="/icons/logo.svg" alt="" />
          </Link>
          <ul
            className={`${styles.nav__list} ${
              clicked ? styles["nav-active"] : ""
            }`}
          >
            <li>
              <Link href="/study-groups"> Grupos de estudio </Link>
            </li>
            <li>
              <Link href="/documents"> Documentos </Link>
            </li>
            <li>
              <Link href="/resources"> Recursos </Link>
            </li>
          </ul>
          <div
            className={`${styles.nav__btn} ${clicked ? styles.toggle : ""}`}
            onClick={() => setClicked(!clicked)}
          >
            <div className={styles.line__1}></div>
            <div className={styles.line__2}></div>
            <div className={styles.line__3}></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TheNavbar;
