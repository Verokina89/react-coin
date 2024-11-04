import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from './Err';

function Coin() {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCrypto = async () => {
      try { 
      const response = await fetch(`https://api.coincap.io/v2/assets/${id}`);
      if (!response.ok) {
        throw new Error('Error fetching crypto data'); //lanza un error si la respuesta no es 200
      }

      const data = await response.json();
      setCrypto(data.data);

      } catch (err) {
      setError(err.message); //guarda mensaje de error
      }

    };

    fetchCrypto();
  }, [id]);

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.find(coin => coin.id === crypto.id)) {
      //eliminar de favoritos
      const updatedFavorites = favorites.filter(coin => coin.id !== crypto.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      //agregar a favoritos
      favorites.push(crypto);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };

  if (error) {
    return <ErrorPage />; //muestra  pagina de error si hay
  }
  //si los datos no se cargan
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
