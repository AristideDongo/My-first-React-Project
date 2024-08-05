import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Cart = ({ cart, setCart }) => {

 //Augmenter la quantité dans le panier
 const incquantity = (product) =>{
   const exist = cart.find((x) => {
    return x.id === product.id
   })
    setCart(cart.map((Elm) => {
     return Elm.id === product.id ? {...exist, quantity: exist.quantity +1} : Elm
    }))
 }

 //Diminuer la quantité dans le panier
 const decquantity = (product) =>{
  const exist = cart.find((x) => {
   return x.id === product.id
  })
   setCart(cart.map((Elm) => {
    return Elm.id === product.id ? {...exist, quantity: exist.quantity -1} : Elm
   }))
}

//Supprimer le produit du panier
const removeproduct = (product) =>{
 const exist = cart.find((x) => {
  return x.id === product.id 
 })
 if(exist.quantity > 0) {
  setCart(cart.filter((Elm) => {
   return Elm.id !== product.id
  }))
 }
}
// prix total des produits dans le panier
const total = cart.reduce((price, item) => price + item.quantity * item.price, 0)
  return (
    <>
      <div className="cart">
        <h3>Panier</h3>
        {cart.length === 0 && (
          <>
            <div className="empty-cart">
              <h2>Votre Panier de Course est vide😞</h2>
              <Link to="/boutique">
                <button>Acheter Maintenant</button>
              </Link>
            </div>
          </>
        )}
        <div className="container">
         {
         cart.map((Elm) => {
          return(
           <>
           <div className="box">
             <div className="img-box">
              <img src={Elm.image} alt={Elm.Name} />
             </div>
             <div className="detail">
              <div className="info">
              <h4>{Elm.cat}</h4>
              <h3>{Elm.Name}</h3>
              <p>Prix: {Elm.price}Fcfa</p>
              <p>Total: {Elm.price * Elm.quantity}Fcfa</p>
              </div>
              <div className="quantity">
               <button onClick={() => incquantity(Elm)} >+</button>
               <button onClick={() => decquantity(Elm)}>-</button>
               <input type="number" value={Elm.quantity}/>
              </div>
              <div className="icon">
               <li onClick={() => removeproduct(Elm)}><AiOutlineClose/></li>
              </div>
             </div>
           </div>
           </>
          )
         })
         }
         </div>
         <div className="bottom">
          {
           cart.length > 0 &&
           <>
          <div className="total">
           <h4>Total:{total}Fcfa</h4>
          </div>
          <button>Vérifier</button>
           </>
          }
         </div>
      </div>
    </>
  );
};

export default Cart;
