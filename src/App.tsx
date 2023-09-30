import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import ResponsiveAppBar from './components/navigation-bar';
import { ProductDetails } from './pages/products-details/product-details';

function App() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
