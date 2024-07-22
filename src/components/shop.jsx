import React from "react";
import "./shop.css";
import { FaEye, FaHeart } from "react-icons/fa";

const Shop = ({ shop, Filter, allcatefilter }) => {
  return (
    <>
      <div className="shop">
        <h2>Boutique</h2>
        <p>Acceuil . Boutique</p>
        <div className="container">
          <div className="left-box">
            <div className="category">
              <div className="header">
                <h3>toutes les categories</h3>
              </div>
              <div className="box">
                <ul>
                 <li onClick={() => allcatefilter ()}>Tous</li>
                  <li onClick={() => Filter ("télévision")}>Télévison</li>
                  <li onClick={() => Filter ("ordinateur")}>Ordinateur</li>
                  <li onClick={() => Filter ("montre")}>Montres Connectés</li>
                  <li onClick={() => Filter ("enceites")}>Enceintes Connectés</li>
                  <li onClick={() => Filter ("electronique")}>Electronique</li>
                  <li onClick={() => Filter ("ecouters")}>Ecouteurs</li>
                  <li onClick={() => Filter ("téléphone")}>Téléphone</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-box">
            <div className="banner">
              <div className="img-box">
                <img src="image/shop_top.webp" alt="" />
              </div>
            </div>
            <div className="product-box">
              <h2>Produit de la boutique</h2>
              <div className="product-container">
                {shop.map((Elm) => {
                  return (
                    <>
                      <div className="box">
                        <div className="img-box">
                          <img src={Elm.image} alt="" />
                          <div className="icon">
                            <li>
                              <FaHeart />
                            </li>
                            <li>
                              <FaEye />
                            </li>
                          </div>
                        </div>
                        <div className="detail">
                         <h3>{Elm.Name}</h3>
                         <p>{Elm.price} Fcfa</p>
                         <button>Ajouter Au Panier</button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
