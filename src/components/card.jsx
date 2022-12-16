import React from "react";

function Card({ id, name, img, description, price }) {
  console.log(img);
  return (
    <div className="card" id={id}>
      <div className="card__box_img">
        <img className="card__img" src={img} alt="card" />
      </div>
      <div className="card__text">
        <span className="card__name">{name}</span>
        <span className="card__description">{description}</span>
        <span className="card__price">
          <span className="card__prix">Prix : </span>
          {price}€
        </span>
      </div>
    </div>
  );
}

export default Card;
