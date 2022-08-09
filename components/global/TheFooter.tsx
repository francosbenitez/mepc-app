import React from "react";
import Email from "../../public/icons/email.svg";
import Instagram from "../../public/icons/instagram.svg";
import Facebook from "../../public/icons/facebook.svg";

const TheFooter = () => {
  return (
    <footer className="bottom-0 w-full mx-auto p-5 sm:px-0 md:py-8 footer">
      <div className="container text-center md:flex m-auto">
        <div className="block md:flex md:flex-column md:w-1/2 font-mm">
          MEPC © 2022
        </div>
        <div className="block md:flex md:flex-column md:w-1/2 md:justify-end">
          <div className="flex justify-center mt-3 md:mt-0">
            <Email className="mx-3 fill-primary" />
            <Instagram className="mx-3 fill-primary" />
            <Facebook className="mx-3 fill-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
