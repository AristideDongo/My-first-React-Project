import React, { useState } from "react";
 import './contact.css'

const Contact = () => {

   const [user,setUser] = useState(
    {
     Utilisateur:'', email: '', sujet: '', Message:'' 
    }
   )

     let values, names
   const data = (e) => {
      values = e.target.value
      names = e.target.name
      setUser({...user, [names]: values})
   }

  return (
    <>
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
                 <input type="text" placeholder="Utilisateur" value={user.Utilisateur} name="Utilisateur" onChange={data} required/>
                </div>
              </div>
              <div className="box">
                <div className="label">
                  <h4>E-mail*</h4>
                </div>
                <div className="input">
                 <input type="email" placeholder="email" value={user.email} name="email" onChange={data} required/>
                </div>
              </div>
              <div className="box">
                <div className="label">
                  <h4>Sujet*</h4>
                </div>
                <div className="input">
                 <input type="text" placeholder="Sujet" value={user.sujet} name="sujet" onChange={data} required/>
                </div>
              </div>
              <div className="box">
                <div className="label">
                  <h4>Message*</h4>
                </div>
                <div className="input">
                 <textarea placeholder="Ecrivez votre message !" name="Message" value={user.Message} onChange={data} required></textarea>
                </div>
              </div>
              <button type="submit">envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
