import React from 'react';
import useSelectByKey from '../../../hooks/useSelectByKey';
import { PRODUCTS_STATE } from '../../../redux/reducers/product.reducer';
import ProductCard from '../ProductCard/ProductCard';
import styles from './styles.module.scss';

export default function ProductList() {
  const products = useSelectByKey(PRODUCTS_STATE.PRODUCTS);
  return (
    <section className={styles.productlist__container}>
      <ul className={styles.productlist__list}>
        {products.map((product) => (
          <li key={`${product.id}-li`}>
            <ProductCard key={`${product.id}-pc`} product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
