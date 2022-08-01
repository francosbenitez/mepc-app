import React from "react";
import contents from "../../../lib/content.json";
import Image from "next/image";
import styles from "./styles.module.scss";

const HomeCollaboration = () => {
  return (
    <section id={styles.collaboration}>
      <div className={styles["collaboration__title--primary"]}>
        <h1>¿Cómo colaborar?</h1>
        <hr />
      </div>
      {contents.collaboration.map((content) => (
        <div className={styles.collaboration__content} key={content.title}>
          <div className={styles.collaboration__image}>
            <Image
              width="100"
              height="100"
              src={"/images/" + content.img}
              alt={content.alt}
            />
          </div>
          <div className={styles.collaboration__text}>
            <div>
              <h2 className={styles.collaboration__title}>{content.title}</h2>
              <p
                className={styles.collaboration__description}
                dangerouslySetInnerHTML={{ __html: content.description }}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HomeCollaboration;
