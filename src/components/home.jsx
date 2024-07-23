import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Homeproducts from "./home_products";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

const Home = ({addtocart}) => {
  //Product category
  const [newProduct, setNewProduct] = useState([])
  const [featuredProduct, setFeaturedProduct] = useState([])
  const [topProduct, setTopProduct] = useState([])
  //trending product
  const [trendingProduct, setTrendingProduct] = useState(Homeproducts);
  //Filtre pour trending product
  const filtercate = (x) => {
    const filterproduct = Homeproducts.filter((curElm) => {
      return curElm.type === x;
    });
    setTrendingProduct(filterproduct);
  };
  //tout les trending product
  const allTrendingProduct = () => {
    setTrendingProduct(Homeproducts);
  };

  //type de produit 
  useEffect (() => {
    productcategory()
  })
  const productcategory = () => {
    //New product
    const newCategory = Homeproducts.filter((x) => {
      return x.type === 'new'
    })
    setNewProduct(newCategory)

    // featured product 
    const featuredCategory = Homeproducts.filter((x) => {
      return x.type === 'featured'
    })
    setFeaturedProduct(featuredCategory)

    //Top product
    const topCategory = Homeproducts.filter((x) => {
      return x.type === 'top'
    })
    setTopProduct(topCategory)
  }
  return (
    <>
      <div className="home">
        <div className="top_banner">
          <div className="contant">
            <h3>Silver aluminum</h3>
            <h2>Apple Watch</h2>
            <p>10% de réduction</p>
            <Link to="/boutique" className="link">
              Acheter Maintenant
            </Link>
          </div>
        </div>
        <div className="trending">
          <div className="container">
            <div className="left_box">
              <div className="header">
                <div className="heading">
                  <h2 onClick={() => allTrendingProduct()}>
                    Tendance Du Moment
                  </h2>
                </div>
                <div className="cate">
                  <h3 onClick={() => filtercate("new")}>Nouvautés</h3>
                  <h3 onClick={() => filtercate("featured")}>Vedette</h3>
                  <h3 onClick={() => filtercate("top")}>Meilleur Vente</h3>
                </div>
              </div>
              <div className="products">
                <div className="container">
                  {trendingProduct.map((Elm) => {
                    return (
                      <>
                        <div className="box">
                          <div className="img_box">
                            <img src={Elm.image} alt="" />
                          </div>
                          <div className="info">
                            <h3>{Elm.Name}</h3>
                            <p>{Elm.price}Fcfa</p>
                            <button className="btn" onClick={() => addtocart(Elm)}>Ajouter</button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <button>Voir Plus</button>
              </div>
            </div>
            <div className="right_box">
              <div className="right-container">
                <div className="center-call">
                  <div className="head">
                    <h3>Service Client</h3>
                  </div>
                  <div className="detail">
                    <div className="img_box">
                      <img src="image/file.png" alt="" />
                    </div>
                    <div className="info">
                      <h3>Carelle</h3>
                      <h4>Service Client</h4>
                      <p>
                        Disponible entre 8h30 et 18H vous pouvez la contacter au
                        numèro suivant: +225 00-00-00-00-00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="newsletter">
                  <div className="head">
                    <h3>Newsletter</h3>
                  </div>
                  <div className="form">
                    <p>Rejoignez notre liste de diffusion</p>
                    <input
                      type="email"
                      placeholder="E-mail"
                      autoComplete="off"
                    />
                    <button>S'abonner</button>
                    <div className="icon_box">
                      <div className="icon">
                        <FaFacebookF />
                      </div>
                      <div className="icon">
                        <FaXTwitter />
                      </div>
                      <div className="icon">
                        <FaSquareInstagram />
                      </div>
                      <div className="icon">
                        <FaTiktok />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product_type">
          <div className="container">
            <div className="box">
            <div className="header">
              <h2>Nouveaux Produits</h2>
            </div>
             {
              newProduct.map((Elm) => {
                return(
                  <>
              <div className="productbox">
                  <div className="img-box">
                    <img src={Elm.image} alt="" />
                  </div>
                  <div className="detail">
                    <h3>{Elm.Name}</h3>
                    <p>{Elm.price} Fcfa</p>
                    <div className="icon">
                      <button  onClick={() => addtocart(Elm)}><FaShoppingCart/></button>
                    </div>
                  </div>
              </div>
                 </>
                )
              })
             }
            </div>
            <div className="box">
            <div className="header">
              <h2>Produits Vedettes</h2>
            </div>
             {
              featuredProduct.map((Elm) => {
                return(
                  <>
              <div className="productbox">
                  <div className="img-box">
                    <img src={Elm.image} alt="" />
                  </div>
                  <div className="detail">
                    <h3>{Elm.Name}</h3>
                    <p>{Elm.price} Fcfa</p>
                    <div className="icon">
                      <button  onClick={() => addtocart(Elm)}><FaShoppingCart/></button>
                    </div>
                  </div>
              </div>
                 </>
                )
              })
             }
            </div>
            <div className="box">
            <div className="header">
              <h2>Meilleurs ventes</h2>
            </div>
             {
              topProduct.map((Elm) => {
                return(
                  <>
              <div className="productbox">
                  <div className="img-box">
                    <img src={Elm.image} alt="" />
                  </div>
                  <div className="detail">
                    <h3>{Elm.Name}</h3>
                    <p>{Elm.price} Fcfa</p>
                    <div className="icon">
                      <button  onClick={() => addtocart(Elm)}><FaShoppingCart/></button>
                    </div>
                  </div>
              </div>
                 </>
                )
              })
             }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
