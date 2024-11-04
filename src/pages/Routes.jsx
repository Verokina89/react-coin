import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Root from './Root'
import Home from './Home'
import Coin from './Coin'
import Favorites from './Favorites'
import ErrorPage from './Err'

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}> 
        <Route index element={<Home />} />  
        <Route path="coin/:id" element={<Coin />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default RoutesConfig;