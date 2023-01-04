import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { SECTIONS, SORT_OPTIONS } from '../../services/constants';
import CustomSelect from '../CustomSelect/CustomSelect';
import { setFilter } from '../../redux/actions/ui.action';

export default function FilterBar() {
  // en los selects el evento es onchange
  const sections = Object.values(SECTIONS);
  const sorts = Object.values(SORT_OPTIONS);

  const dispatch = useDispatch();

  const handleSetFilter = (e) => {
    console.log(e.target.value);
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.filterbar}>
      <form className={styles.filterbar__form}>
        <CustomSelect
          selectProps={{
            selectName: 'product-section',
            selectTitle: ' Productos (53)',
            classSelect: styles.filterbar__select,
            classTitle: styles.filterbar__optiontitle,
            classOption: styles.filterbar__option,
            optionValues: sections
          }}
          handleChange={handleSetFilter}
        />

        <CustomSelect
          selectProps={{
            selectName: 'order',
            selectTitle: 'Ordenar Por',
            classSelect: styles.filterbar__select,
            classTitle: styles.filterbar__optiontitle,
            classOption: styles.filterbar__option,
            optionValues: sorts
          }}
        />
      </form>
    </div>
  );
}
