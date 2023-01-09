/* eslint-disable comma-dangle */
import React from 'react';
import { selectProductsByFilter } from '../../redux/selectors';

export default function CustomSelect({ selectProps, handleChange = () => {} }) {
  /*  const selectProp = {
    selectName: 'A name',
    classSelect: 'choose',
    selectTitle: 'Choose a section',
    classTitle: 'Classname Title',
    classOption: 'classname for the opcion",
    optionValues: [],
    counterVisible: boolean,
  };   PropTypes */

  return (
    <select
      name={selectProps.selectName}
      className={selectProps.classSelect}
      defaultValue=""
      onChange={handleChange}
    >
      <option value="" className={selectProps.classTitle}>
        {selectProps.selectTitle}
      </option>
      {selectProps.optionValues.map((value) => (
        <option
          key={`${value}-id`}
          value={value}
          className={selectProps.classOption}
        >
          {selectProps.counterVisible
            ? `${value} - ${selectProductsByFilter(value).length}`
            : value}
        </option>
      ))}
    </select>
  );
}
