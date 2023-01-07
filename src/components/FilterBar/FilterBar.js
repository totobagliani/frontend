/* eslint-disable comma-dangle */
import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { SECTIONS, SORT_OPTIONS } from '../../services/constants';
import {
  setCurrentPage,
  setFilter,
  setOrder
} from '../../redux/actions/ui.action';
import CustomSelectOrderBy from '../CustomSelect/CustomSelectOrderBy';
import CustomSelectProductsSection from '../CustomSelect/CustomSelectProductsSection';

export default function FilterBar() {
  const sections = Object.values(SECTIONS);
  const sorts = Object.values(SORT_OPTIONS);

  const dispatch = useDispatch();

  const handleSetFilter = (e) => {
    dispatch(setFilter(e.target.value));
    dispatch(setCurrentPage(1));
  };

  const handleSetOrder = (e) => {
    dispatch(setOrder(e.target.value));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className={styles.filterbar}>
      <form className={styles.filterbar__form}>
        <CustomSelectProductsSection
          selectProps={{
            selectName: 'product-section',
            selectTitle: ' Productos',
            classSelect: styles.filterbar__select,
            classTitle: styles.filterbar__optiontitle,
            classOption: styles.filterbar__option,
            optionValues: sections
          }}
          handleChange={handleSetFilter}
        />

        <CustomSelectOrderBy
          selectProps={{
            selectName: 'order',
            selectTitle: 'Ordenar Por',
            classSelect: styles.filterbar__select,
            classTitle: styles.filterbar__optiontitle,
            classOption: styles.filterbar__option,
            optionValues: sorts
          }}
          handleChange={handleSetOrder}
        />
      </form>
    </div>
  );
}
