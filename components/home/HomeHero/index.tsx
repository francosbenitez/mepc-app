import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const HomeHero = () => {
  return (
    <section className={styles["hero"]}>
      <div className={styles["hero-container"]}>
        {/* <div className={styles["hero-description"]}>
          <h1>¿Quiénes somos?</h1>
          <h2>
            Somos una organización independiente de estudiantes y graduades, que
            tenemos como fin promover el pensamiento crítico y la psicología
            científica, formarnos entre los integrantes en temas afines y
            reclamar por una formación actualizada, plural y científica.
          </h2>
        </div> */}
        <div className={styles["hero-image"]}>
          <Image
            src="/images/hero.svg"
            width="500"
            height="500"
            alt="MEPC cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
