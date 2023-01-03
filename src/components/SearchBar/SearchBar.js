import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';

export default function SearchBar() {
  return (
    <div className={styles.search__container}>
      <form className={styles.search__form}>
        <input
          className={styles.search__input}
          type="search"
          placeholder="Search"
          id="search-box"
          name="searchInput"
        />
        <label htmlFor="searchID" className={styles.search__label}>
          <SearchOutlined className={styles.search__icon} />
        </label>
        <button type="button" id={styles['search-submit']}>
          <SearchOutlined className={styles.search__icon} />
        </button>
      </form>
    </div>
  );
}
