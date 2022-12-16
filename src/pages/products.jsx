import React from "react";
import dataBananas from "../dataBananas.json";
import { Link } from "react-router-dom";
import Card from "../components/card";

function Products() {
  return (
    <div className="products">
      <div className="forSale">
        <h2>Bananes à la vente :</h2>
      </div>
      <div className="annonces">
        {dataBananas.map((banana) => (
          <Link
            className="bananaLink"
            key={banana.id}
            to={"/products/" + banana.id}
          >
            <Card
              key={banana.id}
              id={banana.id}
              img={banana.cover}
              name={banana.name}
              description={banana.description}
              price={banana.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
