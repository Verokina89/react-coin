import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites.</p>
      ) : (
        <ul>
            {favorites.map(crypto => (
            <li key={crypto.id}>
              <Link to={`/coin/${crypto.id}`}>{crypto.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
