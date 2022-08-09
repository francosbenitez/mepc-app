import React from "react";

const TheAbout = () => {
  return (
    <section className="">
      <div className="container m-auto px-8">
        <div className="md:flex md:flex-row p-16">
          <div className="text-left py-16 flex md:flex-column md:basis-6/12">
            <div>
              <p className="mb-6 text-2xl font-mb">¿Quiénes somos?</p>
              <p className="text-xl leading-relaxed">
                Somos un grupo de estudiantes y graduades autoconvocades,
                provenientes de diferentes puntos de Argentina, que compartimos
                un mismo ideal: el desarrollo de una{" "}
                <span className="font-mm">
                  formación y una práctica profesional basadas en fundamentos
                  científicos
                </span>
                . Nacimos en la{" "}
                <span className="font-mm">
                  Facultad de Psicología de la Universidad de Buenos Aires (UBA)
                </span>
                , y ya sumamos alrededor de 3000 personas que creemos que la
                ciencia es el camino que debemos seguir en psicología para
                mejorar nuestra formación.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 m-auto basis-6/12">
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
      </div>
    </section>
  );
};

export default TheAbout;
