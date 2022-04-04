import React from "react";
import "./Footer.scss";
import wclogo from "./img/wclogo.svg";
import fypedlogo from "./img/fypedlogo.svg";

function Footer() {
  return (
    <div className="footer">
      <img src={wclogo} alt="" className="footer-wc-logo" />
      <img src={fypedlogo} alt="" className="footer-fyped-logo" />
      <div className="footer-links">
        <a href="" className="footer-impressum">
          Impressum
        </a>
        <a href="" className="footer-datenschutz">
          Datenschutz
        </a>
        <a href="" className="footer-agb">
          AGBs
        </a>
      </div>
    </div>
  );
}

export default Footer;
