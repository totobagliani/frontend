import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div>
      <p>
        {product.productName} {product.price}
      </p>
    </div>
  );
}
