import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from '../components/AddProduct/AddProduct';
import Header from '../components/Header/Header';
import ProductsMain from '../components/ProductsMain/ProductsMain';

export function AppRouter() {
  return (
    <div className="AppRouter">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<ProductsMain />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </Router>
    </div>
  );
}
