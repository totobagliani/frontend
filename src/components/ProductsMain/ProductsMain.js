import React from 'react';
import { useSelector } from 'react-redux';

export default function ProductsMain() {
  const { productAdded } = useSelector((state) => state.products);

  return (
    <div>
      <h1>ProductsMain</h1>
      <p>
        {productAdded.productName} {productAdded.description}
      </p>
    </div>
  );
}
