import React from "react";
import GitHub from "../../../public/icons/github.svg";
import styles from "./styles.module.scss";

const TheFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <p>MEPC © 2021</p>
        <p>
          Desarrollado con ☕️ y
          <a
            href="https://github.com/francosbenitez/mepc.app"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
          por
          <a
            href="https://www.francosbenitez.com/"
            target="_blank"
            rel="noreferrer"
          >
            Franco Sebastián Benítez
          </a>
        </p>
      </div>
    </footer>
  );
};

export default TheFooter;
