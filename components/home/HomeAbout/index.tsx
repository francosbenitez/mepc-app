import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import contents from "../../../lib/content.json";

const HomeAbout = () => {
  return (
    <section className={styles["about"]}>
      <div className={styles["about-avatar"]}>
        <div>
          <div className={styles["about-image"]}>
            <Image
              width="250"
              height="250"
              src="/images/avatar.png"
              alt="Avatar MEPC"
            />
          </div>
          <div className={styles["about-social"]}>
            <h2>MEPC</h2>
            <h3>Movimiento Estudiantil por la Psicología Científica</h3>
            <ul className={styles["about-items"]}>
              {contents.social_networks.map((item) => (
                <a
                  href={item.url}
                  key={item.url}
                  className={styles["about-items-networks"]}
                >
                  <Image
                    width="20"
                    height="20"
                    src={`/icons/${item.component}.svg`}
                    alt={item.component}
                  />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles["about-video"]}>
        <div>
          <div className={styles["about-iframe-wrapper"]}>
            <iframe
              width="800"
              height="500"
              src="https://www.youtube.com/embed/ieSG5JVLOow"
            ></iframe>
          </div>
          <div className={styles["about-description"]}>
            <hr />
            <p>
              Somos el Movimiento Estudiantil por la Psicología Científica
              (MEPC), un grupo de estudiantes y graduades autoconvocades de
              diferentes puntos del país que compartimos un mismo ideal: el
              desarrollo de una formación y una práctica profesional basadas en
              fundamentos científicos. Nacimos en la Facultad de Psicología de
              la Universidad de Buenos Aires (UBA), y ya sumamos casi 3000
              personas de diferentes casas de estudio que creemos que la ciencia
              es el camino que debemos seguir en psicología para mejorar nuestra
              formación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
