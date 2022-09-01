import React from "react";
import { CityLogo } from "../ui/icons";

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <CityLogo to="/" widht="70px" height="70px" />
      </div>
      <div className="footer_discl">
        Manchester city 2022. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
