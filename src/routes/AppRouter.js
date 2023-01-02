import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from '../components/AddProduct/AddProduct';
import Header from '../components/Header/Header';
import Products from '../components/Products/Products';

export function AppRouter() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </Router>
    </div>
  );
}
