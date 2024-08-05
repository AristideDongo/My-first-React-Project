import React from "react";
import { Routes, Route } from "react-router";
import Home from "./home/home";
import Shop from "./shop/shop";
import Cart from "./cart/cart";
import About from "./about/about";
import Collection from "./collection/collection";

const Rout = ({
  shop,
  Filter,
  allcatefilter,
  addtocart,
  cart,
  setCart,
  addlike,
  like,
  setLike,
}) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home addtocart={addtocart} addlike={addlike} />}
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
              addlike={addlike}
            />
          }
        />
        <Route path="/propos" element={<About />} />
        <Route
          path="/collection"
          element={<Collection like={like} setLike={setLike} />}
        />
      </Routes>
    </>
  );
};

export default Rout;
