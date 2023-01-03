import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';

export default function Results() {
  return (
    <div className={styles.results}>
      <p className={styles.results__content}>-123- Items found</p>
      <h2 className={styles.results__title}>Search Results</h2>
      <h2 className={styles.results__title}>for -Bathroom taps-</h2>
      <CloseOutlined className={styles.results__closeIcon} />
    </div>
  );
}
