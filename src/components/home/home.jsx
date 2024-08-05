import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Homeproducts from "../home_products/home_products";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

const Home = ({ addtocart, addlike }) => {
  // Product category
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  // Trending product
  const [trendingProduct, setTrendingProduct] = useState(Homeproducts);
  
  
  // Filter for trending products
  const filtercate = (x) => {
    const filterproduct = Homeproducts.filter((curElm) => curElm.type === x);
    setTrendingProduct(filterproduct);
  };
  
  // Show all trending products
  const allTrendingProduct = () => {
    setTrendingProduct(Homeproducts);
  };
  
  // Get product categories
  useEffect(() => {
    productcategory();
  }, []);
  
  const productcategory = () => {
    // New product
    const newCategory = Homeproducts.filter((x) => x.type === "new");
    setNewProduct(newCategory);
    
    // Featured product
    const featuredCategory = Homeproducts.filter((x) => x.type === "featured");
    setFeaturedProduct(featuredCategory);
    
    // Top product
    const topCategory = Homeproducts.filter((x) => x.type === "top");
    setTopProduct(topCategory);
  };
  
  // Product detail states
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState(null);
  // Show product details
  const detailpage = (product) => {
    setDetail(product);
    setShowDetail(true);
  };

  // Close product details
  const closedetail = () => {
    setShowDetail(false);
  };

  return (
    <>
      {/* Product detail pop-up */}
      {showDetail && detail && (
        <div className="product-detail">
          <button className="close-btn" onClick={closedetail}><AiOutlineClose /></button>
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
      )}
      
      <div className="home">
        <div className="top_banner">
          <div className="contant">
            <h3>Silver aluminum</h3>
            <h2>Apple Watch</h2>
            <p>10% de réduction</p>
            <Link to="/boutique" className="link">Acheter Maintenant</Link>
          </div>
        </div>
        <div className="trending">
          <div className="container">
            <div className="left_box">
              <div className="header">
                <div className="heading">
                  <h2 onClick={() => allTrendingProduct()}>Tendance Du Moment</h2>
                </div>
                <div className="cate">
                  <h3 onClick={() => filtercate("new")}>Nouvautés</h3>
                  <h3 onClick={() => filtercate("featured")}>Vedette</h3>
                  <h3 onClick={() => filtercate("top")}>Meilleur Vente</h3>
                </div>
              </div>
              <div className="products">
                <div className="container">
                  {trendingProduct.map((Elm) => (
                    <div className="box" key={Elm.id}>
                      <div className="img_box">
                        <img src={Elm.image} alt="" />
                        <div className="icon">
                          <div className="icon_box" onClick={() => addlike(Elm)}>
                            <FaHeart />
                          </div>
                          <div className="icon_box" onClick={() => detailpage(Elm)}>
                            <FaEye />
                          </div>
                        </div>
                      </div>
                      <div className="info">
                        <h3>{Elm.Name}</h3>
                        <p>{Elm.price}Fcfa</p>
                        <button className="btn" onClick={() => addtocart(Elm)}>Ajouter</button>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/boutique">
                  <button>Voir Plus</button>
                </Link>
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
                      <p>Disponible entre 8h30 et 18H vous pouvez la contacter au numèro suivant: +225 00-00-00-00-00</p>
                    </div>
                  </div>
                </div>
                <div className="newsletter">
                  <div className="head">
                    <h3>Newsletter</h3>
                  </div>
                  <div className="form">
                    <p>Rejoignez notre liste de diffusion</p>
                    <input type="email" placeholder="E-mail" autoComplete="off" />
                    <button>S'abonner</button>
                    <div className="icon_box">
                      <div className="icon"><FaFacebookF /></div>
                      <div className="icon"><FaXTwitter /></div>
                      <div className="icon"><FaSquareInstagram /></div>
                      <div className="icon"><FaTiktok /></div>
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
                <h2>Offre Du Jour</h2>
              </div>
              {newProduct.map((Elm) => (
                <div className="productbox" key={Elm.id}>
                  <div className="img-box">
                    <img src={Elm.image} alt="" />
                  </div>
                  <div className="detail">
                    <h3>{Elm.Name}</h3>
                    <p>{Elm.price} Fcfa</p>
                    <div className="icon">
                      <button onClick={() => detailpage(Elm)}><FaEye /></button>
                      <button onClick={() => addlike(Elm)}><FaHeart /></button>
                      <button onClick={() => addtocart(Elm)}><FaShoppingCart /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="box">
              <div className="header">
                <h2>Offre De La Semaine</h2>
              </div>
              {featuredProduct.map((Elm) => (
                <div className="productbox" key={Elm.id}>
                  <div className="img-box">
                    <img src={Elm.image} alt="" />
                  </div>
                  <div className="detail">
                    <h3>{Elm.Name}</h3>
                    <p>{Elm.price} Fcfa</p>
                    <div className="icon">
                      <button onClick={() => detailpage(Elm)}><FaEye /></button>
                      <button onClick={() => addlike(Elm)}><FaHeart /></button>
                      <button onClick={() => addtocart(Elm)}><FaShoppingCart /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="box">
              <div className="header">
                <h2>Vente Flash</h2>
              </div>
              {topProduct.map((Elm) => (
                <div className="productbox" key={Elm.id}>
                  <div className="img-box">
                    <img src={Elm.image} alt="" />
                  </div>
                  <div className="detail">
                    <h3>{Elm.Name}</h3>
                    <p>{Elm.price} Fcfa</p>
                    <div className="icon">
                      <button onClick={() => detailpage(Elm)}><FaEye /></button>
                      <button onClick={() => addlike(Elm)}><FaHeart /></button>
                      <button onClick={() => addtocart(Elm)}><FaShoppingCart /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;