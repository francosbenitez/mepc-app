import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const HomeHero = () => {
  return (
    <div
      className={`${styles["encabezado"]} flex items-end`}
      style={{
        background:
          "url('https://www.cerveceriaymalteriaquilmes.com/wp-content/uploads/2021/04/home.jpg') no-repeat center center",
      }}
    >
      <div className={styles["container"]}>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="mb-5 font-bold">SOMOS MEPC</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
