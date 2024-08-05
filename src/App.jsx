import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/navbar/nav";
import Rout from "./components/rout";
import Footer from "./components/footer/footer";
import Homeproducts from "./components/home_products/home_products";

const App = () => {
  //product to like
  const [like, setLike] = useState([])
  //Add TO cart
  const [cart, setCart] = useState([]);

  //produit Pour la page shop
  const [shop, setShop] = useState(Homeproducts);

  //shop search Filter
  const [search, setSearch] = useState("");

  //filtre pour les categories du shop
  const Filter = (x) => {
    const cateFilter = Homeproducts.filter((product) => {
      return product.cat === x;
    });
    setShop(cateFilter);
  };
  const allcatefilter = () => {
    setShop(Homeproducts);
  };

  //shop search Filter
  const searchproduct = () => {
    const searchfilter = Homeproducts.filter((x) => {
      return x.cat === search;
    });
    setShop(searchfilter);
  };

  //add cart
  const addtocart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist) {
      alert("❌Vous avez déjà ajouter ce produit au panier!");
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      alert("Ajouter au panier✅");
    }
  };

  //product liked
  const addlike = (products) => {
    const existy = like.find((i) => {
      return i.id === products.id
    })
      if (existy) {
        alert("❌Vous avez déjà ajouter ce produit à votre collection!");
      } else {
        setLike([...like, {...products, quantity: 1}])
        alert("Ajouter à votre collection✅");
      }
      
  }
  return (
    <>
      <BrowserRouter>
        <Nav
          search={search}
          setSearch={setSearch}
          searchproduct={searchproduct}
        />
        <Rout
          setCart={setCart}
          cart={cart}
          shop={shop}
          Filter={Filter}
          allcatefilter={allcatefilter}
          addtocart={addtocart}
          addlike={addlike}
          setLike={setLike}
          like={like}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
