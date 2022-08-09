import React from "react";
import Link from "next/link";

const TheAbout = () => {
  return (
    <section className="">
      <div className="container m-auto py-16">
        <div className="lg:w-1/2 m-auto text-center">
          <div className="py-8">
            <div>
              <p className="mb-6 text-7xl font-me">SOMOS MEPC</p>
              <p className="text-xl leading-relaxed font-mm">
                Una organización independiente de estudiantes y graduades, que
                busca promover el pensamiento crítico y la psicología científica
              </p>
              <button className="rounded btn bg-primary text-white p-2 border-white my-3">
                <Link href="/login">Publicá</Link>
              </button>
            </div>
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
    </section>
  );
};

export default TheAbout;
