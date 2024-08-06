import React, { useEffect, useReducer, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/navbar/nav";
import Rout from "./components/rout";
import Footer from "./components/footer/footer";
import Homeproducts from "./components/home_products/home_products";
import { initialState, Appreducer } from "./app-reduce";

const App = () => {
  const [state, dispatch] = useReducer(Appreducer, initialState);

  const setSearch = (search) => {
    dispatch({ type: "SET_SEARCH", payload: search });
  };
  const setCart = (cart) => {
    dispatch({ type: "SET_CART", payload: cart });
  };
  const setShop = (shop) => {
    dispatch({ type: "SET_SHOP", payload: shop });
  };
  const setLike = (like) => {
    dispatch({ type: "SET_LIKE", payload: like });
  };
  const Filter = (x) => {
    dispatch({
      type: "FILTER",
      payload: { products: Homeproducts, category: x },
    });
  };
  const allcatefilter = () => {
    dispatch({ type: "ALL_CATE_FILTER", payload: Homeproducts });
  };
  const searchproduct = () => {
    dispatch({ type: "SEARCH_PRODUCT", payload: { products: Homeproducts } });
  };
  const addtocart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  useEffect(() => {
    const time = setTimeout(() => {
      if(state.search) {
        searchproduct()
      } else{
        allcatefilter()
      }
    }, 1000)
    return () =>(time)
  }, [state.search])
  return (
    <>
      <BrowserRouter>
        <Nav
          search={state.search}
          setSearch={setSearch}
          searchproduct={searchproduct}
        />
        <Rout
          setCart={setCart}
          cart={state.cart}
          setShop={setShop}
          shop={state.shop}
          Filter={Filter}
          allcatefilter={allcatefilter}
          addtocart={addtocart}
          setLike={setLike}
          like={state.like}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
