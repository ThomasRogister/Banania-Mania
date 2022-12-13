import React from "react";
import logo_font from "../assets/logo_font.png";

import "../style/style_home.css";

function Home() {
  return (
    <div className="home">
      <div className="logo_box">
        <img className="home__logo_font" src={logo_font} alt="banana mania" />
        <h2 className="home__tagline">Vendez votre Banane !</h2>
      </div>
      <div className="home__form">
        <h3>inscription :</h3>
        <form className="signUpForm">
          <input className="signUpEmail" type="text" placeholder="E-mail" />
          <input
            className="signUpPassword"
            type="text"
            placeholder="Password"
          />
        </form>
      </div>
    </div>
  );
}

export default Home;
