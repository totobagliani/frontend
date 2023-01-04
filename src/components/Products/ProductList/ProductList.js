import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useSelectByKey from '../../../hooks/useSelectByKey';
import { startGetAllProducts } from '../../../redux/actions/products.action';
import { PRODUCTS_STATE } from '../../../redux/reducers/product.reducer';
import ProductCard from '../ProductCard/ProductCard';
import styles from './styles.module.scss';

export default function ProductList() {
  const products = useSelectByKey(PRODUCTS_STATE.PRODUCTS);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetAllProducts());
  }, []);

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
