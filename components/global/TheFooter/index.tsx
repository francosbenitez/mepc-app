import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const TheFooter = () => {
  return (
    <footer className=" undefined mt-40 border-t border-zinc-500 w-full">
      <div className="container flex justify-center w-full py-16 mx-auto text-primary md:justify-between">
        <div className="flex flex-col justify-center w-full text-center">
          <div className="flex flex-col justify-between w-full md:flex-row">
            <div className="flex flex-col gap-1 pb-8 font-medium md:pb-3">
              <a
                className="md:mr-10 md:text-left"
                href="https://discord.gg/frontendcafe"
              >
                Sumate a nuestra comunidad
              </a>
              <a
                className="md:mr-10 md:text-left"
                href="https://frontend.cafe/docs/faqs"
              >
                Preguntas frecuentes
              </a>
              <a
                className="md:mr-10 md:text-left"
                href="https://frontend.cafe/docs/codigo-de-conducta"
              >
                Código de conducta
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-medium text-center md:text-left">
                Encontranos en
              </p>
              <div className="flex justify-center gap-3 md:justify-start">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="grid w-6 h-6 rounded-full place-items-center"
                  href="https://twitter.com/FrontEndCafe"
                ></a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-16 md:flex-row">
            <div>
              <p className="mb-2 font-light md:mr-4">© MEPC 2022</p>
            </div>
            {/* <div> */}
            {/* <Link href="https://vercel.com/?utm_source=hifrontendcafe&utm_campaign=oss">
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src={logo_vercel}
                    alt="Powered by Vercel"
                    placeholder="blur"
                    blurDataURL={logo_vercel}
                  />
                </a>
              </Link> */}
            {/* Something */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
