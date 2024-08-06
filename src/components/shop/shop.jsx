import React, { useReducer } from "react";
import "./shop.css";
import { FaEye, FaHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { initialState, shopReducer } from "./shop-reduce";
import Homeproducts from "../home_products/home_products";

const Shop = ({ shop, Filter, allcatefilter, addtocart, addlike }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState)  
    //to display the details of the different products
    const detailpage = (product) => {
      dispatch({type: 'SHOW_DETAIL', payload: product})
    }
    //For close to details
    const closedetail = () => {
      dispatch({type: 'CLOSE_DETAIL'})
    }
  return (
    <>
    {
      state.showDetail &&
      <>
    <div className="product-detail">
        <button className="close-btn" onClick={closedetail}><AiOutlineClose/></button>
        <div className="container">
          <div className="img-box">
            <img src={state.detail.image} alt="" />
          </div>
          <div className="info">
            <h4>{state.detail.cat}</h4>
            <h2>{state.detail.Name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil vitae sit, quas aliquam non dolorem illo illum cumque aspernatur unde error dignissimos quasi quia eum, laudantium et quod quam nostrum.</p>
            <h3>{state.detail.price} Fcfa</h3>
            <button onClick={() => addtocart(state.detail)}>Ajouter Au Panier</button>
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
                      <div className="box" key={Elm.id}>
                        <div className="img-box">
                          <img src={Elm.image} alt="" />
                          <div className="icon">
                            <li onClick={() => addlike(Elm)}>
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