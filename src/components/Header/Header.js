import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, FileAddOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';
import SearchBar from '../SearchBar/SearchBar';

export default function Header() {
  return (
    <div className={styles['header-container']}>
      <header className={styles['App-header']}>
        <h1 className={styles.title}>Products Searcher</h1>
        <nav className={styles['App-header__nav']}>
          <ul className={styles['App-header__list']}>
            <li className={styles['App-header__item']}>
              <Link to="/" className={styles['App-header__link']}>
                <p className={styles['App-header__text']}>HomePage</p>
                <HomeOutlined className={styles['App-header__icon']} />
              </Link>
            </li>
            <li className={styles['App-header__item']}>
              <Link to="/addproduct" className={styles['App-header__link']}>
                <p className={styles['App-header__text']}>Add Product</p>
                <FileAddOutlined className={styles['App-header__icon']} />
              </Link>
            </li>
            <li className={styles['App-header__item']}>
              <SearchBar />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
