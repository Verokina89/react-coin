import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from '../Root';
import Home from '../pages/Home';
import Coin from '../pages/Coin';
import Favorites from '../pages/Favorites';

function RoutesConf() {
  return (
    <Router>
      <Root>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="coin/:id" element={<Coin />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </Root>
    </Router>  
  );
}

export default RoutesConf;