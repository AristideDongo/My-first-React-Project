import React, { useState } from "react";
import "./shop.css";
import { FaEye, FaHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Homeproducts from "./home_products";

const Shop = ({ shop, Filter, allcatefilter, addtocart }) => {
  //Pour les details des produits
  const [showDetail, setShowDetail] = useState(false)
  //Detail Page data
  const [detail, setDetail] = useState([Homeproducts])
  //Shop detail box
  const detailpage = (product) => {
   const detaildata =  ([{product}])
   const productdetail = detaildata[0]['product']
    // console.log(productdetail);
  setDetail(productdetail)
    setShowDetail(true)
  }
  const closedetail = () => {
    setShowDetail(false)
  }
  return (
    <>
    {
      showDetail &&
      <>
    <div className="product-detail">
        <button className="close-btn" onClick={closedetail}><AiOutlineClose/></button>
        <div className="container">
          <div className="img-box">
            <img src={detail.image} alt="" />
          </div>
          <div className="info">
            <h4>{detail.cat}</h4>
            <h2>{detail.Name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil vitae sit, quas aliquam non dolorem illo illum cumque aspernatur unde error dignissimos quasi quia eum, laudantium et quod quam nostrum.</p>
            <h3>{detail.price} Fcfa</h3>
            <button onClick={() => addtocart(detail)}>Ajouter Au Panier</button>
          </div>
        </div>
    </div>
      </>
      
    }
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
                  <li onClick={() => Filter ("enceintes")}>Enceintes Connectés</li>
                  <li onClick={() => Filter ("electronique")}>Electronique</li>
                  <li onClick={() => Filter ("ecouteurs")}>Ecouteurs</li>
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
                            <li onClick={() => detailpage(Elm)}>
                              <FaEye />
                            </li>
                          </div>
                        </div>
                        <div className="detail">
                         <h3>{Elm.Name}</h3>
                         <p>{Elm.price} Fcfa</p>
                         <button onClick={() => addtocart(Elm)}>Ajouter Au Panier</button>
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
