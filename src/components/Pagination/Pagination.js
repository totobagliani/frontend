/* eslint-disable comma-dangle */
/* eslint-disable no-confusing-arrow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { PRODUCTS_STATE } from '../../redux/reducers/product.reducer';
import { selectProductsByKey, selectCurrentPage } from '../../redux/selectors';
import { ELEMENTS_PER_PAGE, MINIMUM_PAGE } from '../../services/constants';
import {
  nextPage,
  previousPage,
  setCurrentPage
} from '../../redux/actions/ui.action';

export default function Pagination() {
  const products = selectProductsByKey(PRODUCTS_STATE.PRODUCTS);
  const currentPage = selectCurrentPage();

  const dispatch = useDispatch();

  const getTotalPaginationElements = (items, elementsByPage) => {
    const fullPaginationElements = Math.floor(items.length / elementsByPage);
    const remainingPaginationElements = items.length % elementsByPage;

    return remainingPaginationElements
      ? fullPaginationElements + 1
      : fullPaginationElements;
  };

  const totalPaginationElements = getTotalPaginationElements(
    products,
    ELEMENTS_PER_PAGE
  );
  const paginationElements = Array.from(new Array(totalPaginationElements));

  const getElementClassName = (index, Page) =>
    index === Page
      ? `${styles.pagination__item} ${styles.active}`
      : styles.pagination__item;

  const handleCurrentPageChange = (e) => {
    const page = parseInt(e.target.textContent, 10);
    dispatch(setCurrentPage(page));
  };

  const handlePreviousClick = () => {
    dispatch(previousPage(currentPage));
  };

  const handleNextClick = () => {
    dispatch(nextPage(currentPage));
  };

  const isDisabled = (threshold) => threshold === currentPage;

  const getButtonClassName = (disabled) => {
    const className = disabled
      ? `${styles.pagination__button} ${styles['pagination__button--disabled']}`
      : `${styles.pagination__button}`;
    return className;
  };

  const prevDisabled = isDisabled(MINIMUM_PAGE);
  const nextDisabled = isDisabled(totalPaginationElements);

  const prevButtonClassName = getButtonClassName(prevDisabled);
  const nextButtonClassName = getButtonClassName(nextDisabled);
  return (
    <div className={styles.pagination}>
      <button
        type="button"
        className={styles.pagination__button}
        onClick={handlePreviousClick}
        disabled={prevDisabled}
      >
        <ArrowLeftOutlined className={prevButtonClassName} />
      </button>
      <ul id="pagination" className={styles.pagination__list}>
        {paginationElements.length !== 0
          ? paginationElements.map((_, index) => (
              <li
                key={index}
                className={getElementClassName(index + 1, currentPage)}
                onClick={handleCurrentPageChange}
              >
                {`${index + 1}`}
              </li>
            ))
          : null}
      </ul>
      <button
        type="button"
        className={styles.pagination__button}
        onClick={handleNextClick}
        disabled={nextDisabled}
      >
        <ArrowRightOutlined className={nextButtonClassName} />
      </button>
    </div>
  );
}
