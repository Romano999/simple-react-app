import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Products } from './pages/products';
import ResponsiveAppBar from './components/navigation-bar';

function App() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
       </Routes>
    </>
  );
}

export default App;
