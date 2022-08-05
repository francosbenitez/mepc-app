import React from "react";

const TheAbout = () => {
  return (
    <div className="container m-auto px-8">
      <div className="lg:w-1/2 m-auto">
        <div className="text-center py-16">
          <p className="mb-6 text-2xl">¿Quiénes somos?</p>
          <p>
            Somos un grupo de estudiantes y graduades autoconvocades,
            provenientes de diferentes puntos del país, que compartimos un mismo
            ideal: el desarrollo de una formación y una práctica profesional
            basadas en fundamentos científicos. Nacimos en la Facultad de
            Psicología de la Universidad de Buenos Aires (UBA), y ya sumamos
            alrededor de 3000 personas que creemos que la ciencia es el camino
            que debemos seguir en psicología para mejorar nuestra formación.
          </p>
        </div>
        <div>
          <div className="iframe-wrapper">
            <iframe
              width="500"
              height="500"
              src="https://www.youtube.com/embed/ieSG5JVLOow"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheAbout;
