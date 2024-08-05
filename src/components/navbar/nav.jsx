import React from "react";
import "./nav.css";
import { IoSearch } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Nav = ({search, setSearch, searchproduct}) => {
 const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="header">
        <div className="last_header">
          <div className="logo">
            <h1>LOGO</h1>
          </div>
          <div className="nav">
            <ul>
             <li><Link to="/" className="link">Acceuil</Link></li>
             <li><Link to="/boutique" className="link">Boutique</Link></li>
             <li><Link to="/panier" className="link">Panier</Link></li>
             <li><Link to="/collection" className="link">Collection</Link></li>
             <li><Link to="/propos" className="link">Qui sommes-nous</Link></li>
            </ul>
          </div>
          <div className="mid_header">
         <div className="search_box">
             <input type="text" value={search} placeholder="Recherche" onChange={(e) => setSearch(e.target.value)}/>
             <button onClick={searchproduct}><IoSearch /></button>
         </div>
         {
          isAuthenticated ?
          //Button de deconnexion
         <div className="user">
          <div className="btn">
           <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Deconnectez-vous</button>
          </div>
         </div>
         :
         //Button de connexion
         <div className="user">
          <div className="btn">
           <button onClick={() => loginWithRedirect()}>Identifiez-vous</button>
          </div>
         </div>
         }
        </div>
        </div>
      </div>
      
    </>
  );
};
 
export default Nav;
