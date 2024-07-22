import React from "react";
import "./footer.css";
import { FaHeadphones, FaPiggyBank, FaWallet } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="left-box">
            <div className="box">
              <div className="icon_box">
                <FaPiggyBank />
              </div>
              <div className="detail">
                <h3>Faites des Economies</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaShippingFast />
              </div>
              <div className="detail">
                <h3>Livraison Rapide</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaHeadphones />
              </div>
              <div className="detail">
                <h3>24/7</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="box">
            </div>
          </div>
          <div className="right_box">
            <div className="header">
              {/* logo */}
              <h1>ARISTIDE</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus blanditiis facilis amet beatae</p>
            </div>
            <div className="bottom">
              <div className="box">
                <h3>Service Client</h3>
                <ul>
                  <li>Conditions Générales de vente</li>
                  <li>Politique de Confidentialité</li>
                </ul>
              </div>
              <div className="box">
                <h3>Produits</h3>
                <ul>
                  <li>Livraison</li>
                  <li>suivre ma commande</li>
                  <li>Nouveaux Produits</li>
                  <li>Anciens Produits</li>
                </ul>
              </div>
              <div className="box">
                <h3>Informations</h3>
                <ul>
                  <li>Quatier Zanzan, Bondoukou Ci</li>
                  <li>+225 0101010101</li>
                  <li>aristide@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
