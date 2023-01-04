/* eslint-disable react/no-array-index-key */
import React from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';
import { PRODUCTS_STATE } from '../../redux/reducers/product.reducer';
import { selectProductsByKey } from '../../redux/selectors';
import { PRODUCTS_BY_PAGE } from '../../contants';

export default function Pagination() {
  const products = selectProductsByKey(PRODUCTS_STATE.PRODUCTS);

  const getTotalPaginationElements = (items, elementsByPage) => {
    const fullPaginationElements = Math.floor(items.length / elementsByPage);
    const remainingPaginationElements = items.length % elementsByPage;

    return remainingPaginationElements
      ? fullPaginationElements + 1
      : fullPaginationElements;
  };

  const totalPaginationElements = getTotalPaginationElements(
    products,
    PRODUCTS_BY_PAGE
  );
  const paginationElements = Array.from(new Array(totalPaginationElements));

  // const getElementClassName = (index, currentPage) => ((index === currentPage)
  //   ? `${styles.pagination__item} ${styles.active}`
  //   : styles.pagination__item);

  return (
    <div className={styles.pagination}>
      <button type="button" className={styles.pagination__button}>
        <ArrowLeftOutlined className={styles.pagination__icon} />
      </button>
      <ul id="pagination" className={styles.pagination__list}>
        {paginationElements.length !== 0
          ? paginationElements.map((_, index) => (
              <li key={index} className={styles.pagination__item}>
                {`${index + 1}`}
              </li>
            ))
          : null}
      </ul>
      <button type="button" className={styles.pagination__button}>
        <ArrowRightOutlined className={styles.pagination__icon} />
      </button>
    </div>
  );
}
