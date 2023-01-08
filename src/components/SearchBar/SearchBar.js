/* eslint-disable comma-dangle */
import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { useForm } from '../../hooks/useForm';
import { startSearchProducts } from '../../redux/actions/products.action';
import {
  resetFilter,
  resetOrder,
  showResults
} from '../../redux/actions/ui.action';

export default function SearchBar() {
  const [formSearchText, handleFormSearchInputChange, reset] = useForm({
    search: ''
  });
  const [doASearch, setASearch] = useState(false);
  const { search } = formSearchText;
  const dispatch = useDispatch();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!doASearch) {
      setASearch(true);
      reset();
    } else {
      setASearch(false);
    }
    if (search) {
      dispatch(resetFilter());
      dispatch(resetOrder());
      dispatch(startSearchProducts(search));
      dispatch(showResults());
      reset();
    }
  };

  return (
    <div className={styles.search__container}>
      <form>
        <div>
          <input
            className={styles.search__input}
            type="search"
            placeholder="Busca"
            id="search-box"
            name="search"
            value={search}
            onChange={handleFormSearchInputChange}
          />

          <button type="submit" className="btn" onClick={handleSearchSubmit}>
            <SearchOutlined className={styles.search__icon} />
          </button>
        </div>
      </form>
    </div>
  );
}
