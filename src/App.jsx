import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from './components/nav'
import Rout from "./components/rout";
import Footer from "./components/footer";
import Homeproducts from "./components/home_products";

const App = () => {
  //produit Pour la page shop
  const [shop, setShop] = useState(Homeproducts)
    //shop search Filter
  const [search, setSearch] = useState('')
  //filtre pour les categories du shop
  const Filter = (x) => {
    const cateFilter = Homeproducts.filter((product) => {
      return product.cat === x
    })
    setShop(cateFilter)
  }
  const allcatefilter = () => {
    setShop(Homeproducts)
  }
  //shop search Filter
  const searchproduct = () => {
    const searchfilter = Homeproducts.filter((x) => {
      return x.cat === search
    })
    setShop(searchfilter)
  }
 return (
   <>
   <BrowserRouter>
   <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
   <Rout shop={shop} Filter={Filter} allcatefilter={allcatefilter}/>
   <Footer/>
   </BrowserRouter>
   </>
 )
}

export default App