import React from "react";
import { Routes, Route } from "react-router";
import Home from "./home/home";
import Shop from "./shop/shop";
import Cart from "./cart/cart";
import About from "./about/about";

const Rout = ({
  shop,
  Filter,
  allcatefilter,
  addtocart,
  cart,
  setCart,

}) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home addtocart={addtocart} />}
        />
        <Route
          path="/panier"
          element={<Cart cart={cart} setCart={setCart} />}
        />
        <Route
          path="/boutique"
          element={
            <Shop
              shop={shop}
              Filter={Filter}
              allcatefilter={allcatefilter}
              addtocart={addtocart}
            />
          }
        />
        <Route path="/propos" element={<About />} />
      </Routes>
    </>
  );
};

export default Rout;
