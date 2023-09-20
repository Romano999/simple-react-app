import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Products } from './pages/products';

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
       </Routes>
    </>
  );
}

export default App;
