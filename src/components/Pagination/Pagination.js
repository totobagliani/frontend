import React from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';

export default function Pagination() {
  return (
    <div className={styles.pagination}>
      <button type="button" className={styles.pagination__button}>
        <ArrowLeftOutlined className={styles.pagination__icon} />
      </button>
      <ul id="pagination" className={styles.pagination__list}>
        <li className={styles.pagination__item}>1</li>
        <li className={styles.pagination__item}>2</li>
        <li className={styles.pagination__item}>3</li>
        <li className={`${styles.pagination__item} ${styles.active}`}>4</li>
        <li className={styles.pagination__item}>5</li>
        <li className={styles.pagination__item}>6</li>
        <li className={styles.pagination__item}>7</li>
        <li className={styles.pagination__item}>8</li>
      </ul>
      <button type="button" className={styles.pagination__button}>
        <ArrowRightOutlined className={styles.pagination__icon} />
      </button>
    </div>
  );
}
