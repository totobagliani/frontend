import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectProductsByCurrentPage } from '../../../redux/selectors/index';
import { startGetAllProducts } from '../../../redux/actions/products.action';

import ProductCard from '../ProductCard/ProductCard';
import styles from './styles.module.scss';

export default function ProductList() {
  const productsByPage = selectProductsByCurrentPage();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetAllProducts());
  }, []);

  return (
    <section className={styles.productlist__container}>
      <ul className={styles.productlist__list}>
        {productsByPage.map((product) => (
          <li key={`${product.id}-li`}>
            <ProductCard key={`${product.id}-pc`} product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
