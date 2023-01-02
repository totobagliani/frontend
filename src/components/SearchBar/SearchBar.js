import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';

export default function SearchBar() {
  return (
    <div className={styles.search__container}>
      <p className={styles.search__text}>SearchBar</p>
      <SearchOutlined className={styles.search__icon} />
    </div>
  );
}
