import React from 'react';
import styles from './styles.module.scss';
// import { useSelector } from 'react-redux';
// import useSelectByKey from '../../hooks/useSelectByKey';
// import { PRODUCTS_STATE } from '../../redux/reducers/product.reducer';
import Results from '../Results/Results';
import Pagination from '../Pagination/Pagination';
import FilterBar from '../FilterBar/FilterBar';
import ProductList from './ProductList/ProductList';

export default function Products() {
  //  const { productAdded } = useSelector((state) => state.products);
  // const productAdded = useSelectByKey(PRODUCTS_STATE.PRODUCT_ADDED);
  return (
    <div className={styles['products-container']}>
      <Results />
      <FilterBar />
      <ProductList />
      <Pagination />
      <p>{/* {productAdded.productName} {productAdded.description} */}</p>
    </div>
  );
}
