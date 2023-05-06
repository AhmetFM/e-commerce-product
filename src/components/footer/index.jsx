import React from "react";

function Footer() {
  return (
    <div className="md:flex md:justify-center  ">
      <div className="text-center text-[11px]">
        Challenge by &nbsp;
        <a
          className="text-[#3e52a3]"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/AhmetFM">
          Ahmet Furkan Meriç
        </a>
        .
      </div>
    </div>
  );
}

export default Footer;
