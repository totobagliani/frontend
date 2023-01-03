import React from 'react';
import styles from './styles.module.scss';
import Results from '../Results/Results';
import Pagination from '../Pagination/Pagination';
import FilterBar from '../FilterBar/FilterBar';
import ProductList from './ProductList/ProductList';

export default function Products() {
  return (
    <div className={styles['products-container']}>
      <Results />
      <FilterBar />
      <ProductList />
      <Pagination />
    </div>
  );
}
