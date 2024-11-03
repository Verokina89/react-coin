import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      const response = await fetch('https://api.coincap.io/v2/assets/');
      const data = await response.json();
      setCryptos(data.data);
    };

    fetchCryptos();
  }, []);

  return (
    <div>
      <h1>Cryptocurrencies</h1>
      <ul>
        {cryptos.map(crypto => (
          <li key={crypto.id}>
            <Link to={`/coin/${crypto.id}`}>{crypto.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

