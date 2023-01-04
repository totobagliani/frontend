import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectProductsByKey } from '../../../redux/selectors/index';
import { startGetAllProducts } from '../../../redux/actions/products.action';
import { PRODUCTS_STATE } from '../../../redux/reducers/product.reducer';
import ProductCard from '../ProductCard/ProductCard';
import styles from './styles.module.scss';
import { paginate } from '../../../helpers/paginate';

export default function ProductList() {
  const products = selectProductsByKey(PRODUCTS_STATE.PRODUCTS);

  const productByPage = paginate(products, 6, 1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetAllProducts());
  }, []);

  return (
    <section className={styles.productlist__container}>
      <ul className={styles.productlist__list}>
        {productByPage.map((product) => (
          <li key={`${product.id}-li`}>
            <ProductCard key={`${product.id}-pc`} product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
