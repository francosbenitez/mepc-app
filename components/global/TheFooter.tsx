import React from "react";
import Email from "../../public/icons/email.svg";
import Instagram from "../../public/icons/instagram.svg";
import Facebook from "../../public/icons/facebook.svg";

const TheFooter = () => {
  return (
    <footer className="bottom-0 w-full mx-auto p-5 sm:px-0 md:py-8 footer">
      <div className="container relative text-center m-auto">
        <div className="relative text-center m-auto flex justify-end">
          <div className="flex">
            <Email className="mx-3" />
            <Instagram className="mx-3" />
            <Facebook className="mx-3" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
