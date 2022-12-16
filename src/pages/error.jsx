import React from "react";
import "../style/style.css";
import { Link } from "react-router-dom";
import banana_skin from "../assets/banana_skin.png";

function Error() {
  return (
    <div className="error">
      <div className="error__404_skin">
        <img className="bananaSkin" src={banana_skin} alt="peau de banane" />
      </div>
      <p className="error__indications">
        La page que vous demandez n'existe pas.
      </p>
      <Link className="error__link" to="/products">
        <p className="error__BackLink">Retourner à vos bananes</p>
      </Link>
    </div>
  );
}

export default Error;
