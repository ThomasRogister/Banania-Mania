import React from "react";
import "../style/style.css";
import { Link } from "react-router-dom";
import retour from "../assets/retourner_à_vos_bananes.png";
import erreur404 from "../assets/404.png";
import hey from "../assets/hey_error.png";

function Error() {
  return (
    <div className="error">
      <h1>ERROR!</h1>
      <img className="error404" src={erreur404} alt="erreur 404" />
      <img
        className="hey"
        src={hey}
        alt="la page que vous demandez n'existe pas."
      />
      <Link className="error__link" to="/">
        <img src={retour} alt="retourner à vos bananes" />
      </Link>
    </div>
  );
}

export default Error;
