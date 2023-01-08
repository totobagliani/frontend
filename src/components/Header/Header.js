import React from 'react';
import { Link } from 'react-router-dom';
import { FileAddOutlined } from '@ant-design/icons'; // HomeOutlined,
import styles from './styles.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../assets/flat101.jpg';

export default function Header() {
  return (
    <div className={styles['header-container']}>
      <header className={styles['App-header']}>
        <h1 className={styles.title}>Products Searcher</h1>
        <nav className={styles['App-header__nav']}>
          <ul className={styles['App-header__container']}>
            <li className={styles['App-header__item']}>
              <Link to="/" className={styles['App-header__link']}>
                <img
                  src={logo}
                  alt="flat101"
                  className={styles['App-header__logo']}
                />
              </Link>
            </li>

            <li className={styles['App-header__item']}>
              <SearchBar />
            </li>
            <li className={styles['App-header__item']}>
              <Link to="/addproduct" className={styles['App-header__link']}>
                <p className={styles['App-header__text']}>Añade un Producto</p>
                <FileAddOutlined className={styles['App-header__icon']} />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
