import React from "react";
import Image from "next/image";

import styles from "./styles.module.scss";

const HomeHero = () => {
  return (
    <section id={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__description}>
          <h1>¿Quiénes somos?</h1>
          <h2>
            Somos una organización independiente de estudiantes y graduades, que
            tenemos como fin promover el pensamiento crítico y la psicología
            científica, formarnos entre los integrantes en temas afines y
            reclamar por una formación actualizada, plural y científica.
          </h2>
        </div>
        <div className={styles.hero__image}>
          <Image
            src="/images/hero.svg"
            width="300"
            height="300"
            alt="MEPC cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
