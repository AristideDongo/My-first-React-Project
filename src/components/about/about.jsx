import React from "react";
import './about.css'

const About = () => {
 return (
  <>
  <div className="about">
    <div className="container">
     <h2>Qui Sommes-Nous</h2>
    </div>
    <div className="description">
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet iure praesentium totam possimus itaque aliquid et aperiam non, cum aliquam, repellat odio, doloribus eos labore expedita? Quibusdam eligendi esse facilis.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eligendi assumenda! Quo dicta, numquam quis quisquam ipsam earum voluptatibus itaque autem nobis quos ut reprehenderit tenetur fugiat enim. Dolore, alias?</p>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, totam accusamus. Laboriosam deserunt labore, architecto laborum assumenda magni obcaecati facilis ipsum veritatis, sint consequuntur? Necessitatibus sit aut vitae ducimus vel.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe architecto officia rem nesciunt a tempora. Illo, tempora. Debitis aut veritatis ipsa nulla, repellat minima aspernatur facilis deleniti rem sed expedita.</p>
    </div>
    <div className="partner">
      <h3>Nos Partenariats & Certification</h3>
      {/* Afficher les partenariat et certification */}
    </div>
  </div>
  <div className="contact">
        <div className="container">
          <div className="form">
            <h2>Contactez Nous</h2>
            <form method="POST">
              <div className="box">
                <div className="label">
                  <h4>Nom & Prénom*</h4>
                </div>
                <div className="input">
                 <input type="text" placeholder="Utilisateur"  required/>
                </div>
              </div>
              <div className="box">
                <div className="label">
                  <h4>E-mail*</h4>
                </div>
                <div className="input">
                 <input type="email" placeholder="email"  required/>
                </div>
              </div>
              <div className="box">
                <div className="label">
                  <h4>Sujet*</h4>
                </div>
                <div className="input">
                 <input type="text" placeholder="Sujet" required/>
                </div>
              </div>
              <div className="box">
                <div className="label">
                  <h4>Message*</h4>
                </div>
                <div className="input">
                 <textarea placeholder="Ecrivez votre message !" required></textarea>
                </div>
              </div>
              <button type="submit">envoyer</button>
            </form>
          </div>
        </div>
      </div>
  </>
 )
}

export default About