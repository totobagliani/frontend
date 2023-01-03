import React from 'react';
import styles from './styles.module.scss';
import { SECTIONS, SORT_OPTIONS } from '../../services/constants';
import CustomSelect from '../CustomSelect/CustomSelect';

export default function FilterBar() {
  // en los selects el evento es onchange
  const sections = Object.values(SECTIONS);
  const sorts = Object.values(SORT_OPTIONS);

  return (
    <div className={styles.filterbar}>
      <form className={styles.filterbar__form}>
        <CustomSelect
          selectProps={{
            selectName: 'product-section',
            selectTitle: ' Productos (53)',
            classSelect: styles.filterbar__select,
            classTitle: styles.filterbar__optiontitle,
            optionValues: sections,
          }}
        />

        <CustomSelect
          selectProps={{
            selectName: 'order',
            selectTitle: 'Ordenar Por',
            classSelect: styles.filterbar__select,
            classTitle: styles.filterbar__optiontitle,
            optionValues: sorts,
          }}
        />
      </form>
    </div>
  );
}
