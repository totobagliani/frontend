import React from 'react';
// import { useSelector } from 'react-redux';
import useSelectByKey from '../../hooks/useSelectByKey';
import { PRODUCTS_STATE } from '../../redux/reducers/product.reducer';

export default function Products() {
  //  const { productAdded } = useSelector((state) => state.products);
  const productAdded = useSelectByKey(PRODUCTS_STATE.PRODUCT_ADDED);
  return (
    <div>
      <h1>Products</h1>
      <p>
        {productAdded.productName} {productAdded.description}
      </p>
    </div>
  );
}
