import React from 'react';
import useSelectByKey from '../../../hooks/useSelectByKey';
import { PRODUCTS_STATE } from '../../../redux/reducers/product.reducer';
import ProductCard from '../ProductCard/ProductCard';
import styles from './styles.module.scss';

export default function ProductList() {
  const products = useSelectByKey(PRODUCTS_STATE.PRODUCTS);
  return (
    <div className={styles.productlist__container}>
      <ul className={styles.productlist__list}>
        {products.map((product) => (
          <li key={product.key}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
