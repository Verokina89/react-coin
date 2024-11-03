import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from './Root';
import Home from './Home';
import Coin from './Coin';
import Favorites from './Favorites';

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Root />}> 
        <Route index element={<Home />} />  
        <Route path="coin/:id" element={<Coin />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default RoutesConfig;