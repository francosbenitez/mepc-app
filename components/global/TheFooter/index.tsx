import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const TheFooter = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-content"]}>
        <p>MEPC © 2021</p>
        <p>
          Desarrollado con ☕️ y
          <a
            href="https://github.com/francosbenitez/mepc.app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Image
              width="10"
              height="10"
              alt=""
              src="/icons/github.svg"
            /> por{" "}
          </a>
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
