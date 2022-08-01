import React from "react";
import contents from "../../lib/content.json";
import styles from "./styles.module.scss";

const Resources = () => {
  return (
    <main>
      <section id={styles["resources"]}>
        <div className={styles["study__title--primary"]}>
          <h1>Recursos</h1>
          <hr />
        </div>
        <div className={styles["alert__note--right"]}>
          En esta sección presentamos todos los recursos que consideramos que
          son importantes para una formación científica en psicología. Si sabés
          de recursos que deban estar acá, llená
          <a href="https://docs.google.com/forms/u/2/d/e/1FAIpQLSeu8qfWfBGWc1XtMdc21my_0OazVdG3iaGdgtAhNynSKYzTBA/viewform?usp=send_form">
            este formulario
          </a>
          .
        </div>
        <input
          type="text"
          className={styles["search-input"]}
          placeholder=" Ingresá texto de búsqueda"
        />
        <div className={styles["resources__content"]}>
          {contents.resources.map((item) => (
            <div className={styles["resources__card"]} key={item.title}>
              <a href={item.url} rel="noreferrer" target="_blank">
                <div className={styles["resources__card-wrapper"]}>
                  <div className={styles["resources__title"]}>{item.title}</div>
                  <hr />
                  <div className={styles["resources__description"]}>
                    {item.description}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Resources;
