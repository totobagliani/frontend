import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { useForm } from '../../hooks/useForm';
import { startSearchProducts } from '../../redux/actions/products.action';
import { resetFilter, resetOrder } from '../../redux/actions/ui.action';

export default function SearchBar() {
  const [formSearchText, handleFormSearchInputChange, reset] = useForm({
    search: ''
  });
  const [visible, setVisible] = useState(false);
  const { search } = formSearchText;
  const dispatch = useDispatch();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!visible) {
      setVisible(true);
      reset();
    } else {
      setVisible(false);
    }
    if (search) {
      console.log(search);
      console.log(`lanza la busqueda con ${search}`);

      dispatch(resetFilter());
      dispatch(resetOrder());
      dispatch(startSearchProducts(search));
      reset();
    }
  };

  return (
    <div className={styles.search__container}>
      <form className={styles.search__form}>
        {visible && (
          <input
            className="inputtext"
            type="search"
            placeholder="Search"
            id="search-box"
            name="search"
            value={search}
            onChange={handleFormSearchInputChange}
          />
        )}

        <button type="submit" className="btn" onClick={handleSearchSubmit}>
          <SearchOutlined className={styles.search__icon} />
        </button>
      </form>
    </div>
  );
}
