import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/nav";
import Rout from "./components/rout";
import Footer from "./components/footer";
import Homeproducts from "./components/home_products";

const App = () => {
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
        />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
