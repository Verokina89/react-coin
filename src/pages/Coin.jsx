import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Coin() {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(null);

  useEffect(() => {
    const fetchCrypto = async () => {
      const response = await fetch(`https://api.coincap.io/v2/assets/${id}`);
      const data = await response.json();
      setCrypto(data.data);
    };

    fetchCrypto();
  }, [id]);

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.find(coin => coin.id === crypto.id)) {
      // Eliminar de favoritos
      const updatedFavorites = favorites.filter(coin => coin.id !== crypto.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // Agregar a favoritos
      favorites.push(crypto);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };

  if (!crypto) return <div>Loading...</div>;

  return (
    <div>
      <h1>{crypto.name}</h1>
      <button onClick={handleFavorite}>Toggle Favorite</button>
      <p>Price: {crypto.priceUsd}</p>
      <p>Market Cap: {crypto.marketCapUsd}</p>
      <p>Supply: {crypto.supply}</p>
      
    </div>
  );
}

export default Coin;
