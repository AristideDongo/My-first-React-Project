import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Collection = ({product}) => {
  const [like, setLike] = useState([]);

  const addlike = (product) => {
    const existy = like.find((i) => i.id === product.id);
    if (existy) {
      alert("❌Vous avez déjà ajouter ce produit à votre collection!");
    } else {
      setLike([...like, { ...product, quantity: 1 }]);
      alert("Ajouter à votre collection✅");
    }
  };

  return (
    <div>
      {/* Vos autres composants et logique */}
      <button><Link to="/boutique">Ajouter des Produits Maintenant😊</Link></button>
      {/* Page de collection */}
      <CollectionPage like={like} />
    </div>
  );
};

const CollectionPage = ({ like }) => {
  return (
    <div>
      <h2>Ma Collection</h2>
      {like.length === 0 ? (
        <p>Aucun produit dans la collection.</p>
      ) : (
        <ul>
          {like.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Collection;
