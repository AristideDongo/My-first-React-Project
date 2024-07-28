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
    <div className="maps">
     {/* place pour mettre une carte */}
    </div>
  </div>
  </>
 )
}

export default About