import React from "react";

const TheAbout = () => {
  return (
    <section className="">
      <div className="container m-auto py-16">
        <div className="lg:w-1/2 m-auto text-center">
          <div className="py-16">
            <div>
              <p className="mb-6 text-7xl font-me">SOMOS MEPC</p>
              <p className="text-xl leading-relaxed">
                Una organización independiente de estudiantes y graduades, que
                busca promover el pensamiento crítico y la psicología científica
              </p>
            </div>
          </div>
          <div className="">
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
