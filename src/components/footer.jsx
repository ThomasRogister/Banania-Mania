import React from "react";
import logo_btn from "../assets/logo_btn.png";
import by_me from "../assets/by_me.png";

function Footer() {
  return (
    <div className="footer">
      <img className="footer__logo_btn" src={logo_btn} alt="logo banane" />
      <img className="by_me" src={by_me} alt="créé par Thomas Rogister" />
    </div>
  );
}

export default Footer;
