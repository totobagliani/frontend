/* eslint-disable comma-dangle */
import React from 'react';

export default function CustomSelectOrderBy({
  selectProps,
  handleChange = () => {}
}) {
  return (
    <select
      name={selectProps.selectName}
      className={selectProps.classSelect}
      defaultValue=""
      onChange={handleChange}
    >
      <option value="" className={selectProps.classTitle}>
        {selectProps.selectTitle}:
      </option>
      {selectProps.optionValues.map((value) => (
        <option
          key={`${value}-id`}
          value={value}
          className={selectProps.classOption}
        >
          {value}
        </option>
      ))}
    </select>
  );
}
