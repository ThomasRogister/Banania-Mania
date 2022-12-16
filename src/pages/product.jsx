import { useParams } from "react-router-dom";
import dataBananas from "../dataBananas.json";
import Error from "../pages/error";

function Product() {
  const params = useParams();
  const card = dataBananas.find((card) => card.id === params.id);
  const { cover, name, description, price } = card || {};
  if (!card) {
    console.log("toto");
    return <Error />;
  } else {
    return (
      <div className="product__banana">
        <div className="product__img_infos">
          <div className="product__box_img">
            <img className="product__img" src={cover} alt=" banane" />
          </div>
          <div className="product__infos">
            <h2 className="name">{name}</h2>
            <p className="description">{description}</p>
            <p className="price">prix: {price}€</p>
          </div>
        </div>
        <div className="product__btn">
          <button className="modify">Modifier l'annonce</button>
          <button className="delete">supprimer l'annonce</button>
          <button className="addToBasket">Ajouter au panier</button>
        </div>
      </div>
    );
  }
}
export default Product;
