/* eslint-disable comma-dangle */
import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import {
  selectResultsSearch,
  selectVisibilityResults
} from '../../redux/selectors';
import { startGetAllProducts } from '../../redux/actions/products.action';
import { hiddenResults } from '../../redux/actions/ui.action';

export default function Results() {
  const { itemsCount, searchTerm } = selectResultsSearch();
  const resultsVisible = selectVisibilityResults();
  const dispatch = useDispatch();

  const isResults = itemsCount > 0;

  const handleCloseClick = () => {
    dispatch(hiddenResults());
    dispatch(startGetAllProducts());
  };

  if (resultsVisible) {
    return (
      <div className={styles.results}>
        <p className={styles.results__content}>{itemsCount} Items found</p>
        {isResults ? (
          <>
            <h2 className={styles.results__title}>Search Results</h2>
            <h2 className={styles.results__title}>for {searchTerm}</h2>
          </>
        ) : (
          <h2 className={styles.results__title}>
            No results found for {searchTerm}
          </h2>
        )}

        <CloseOutlined
          className={styles.results__closeIcon}
          name="close"
          onClick={handleCloseClick}
        />
      </div>
    );
  }
}
