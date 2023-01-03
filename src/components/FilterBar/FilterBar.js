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
        <select
          name="product-section"
          className={styles.filterbar__select}
          defaultValue=""
        >
          <option value="" disabled className={styles.filterbar__optiontitle}>
            Productos (53)
          </option>
          {sections.map((section) => (
            <option
              key={`${section}-id`}
              value={section}
              className={styles.filterbar__option}
            >
              {section}
            </option>
          ))}
        </select>

        <CustomSelect
          selectProps={{
            selectName: 'order',
            selectTitle: 'Ordenar Por',
            classSelect: styles.filterbar__select,
            classTitle: styles.filterbar__optiontitle,

            optionValues: sorts,
          }}
        />
        {/* <select name="order" className={styles.filterbar__select} defaultValue="">
          <option value="" disabled className={styles.filterbar__optiontitle}>
            Ordenar Por
          </option>
          {sorts.map((criterium) => (
            <option key={`${criterium}-id`} value={criterium}>
              {criterium}
            </option>
          ))}
        </select> */}
      </form>
    </div>
  );
}
