/* eslint-disable comma-dangle */
import { SORT_OPTIONS } from '../../services/constants';
import { types } from '../actiontypes';

export const setCurrentPage = (page) => ({
  type: types.uiSetCurrentPage,
  payload: page
});

export const previousPage = (page) => {
  const decrementedPage = page - 1;
  return { type: types.uiDecrementedPage, payload: decrementedPage };
};

export const nextPage = (page) => {
  const incrementedPage = page + 1;
  return { type: types.uiIncrementedPage, payload: incrementedPage };
};

export const setFilter = (filter) => ({
  type: types.uiSetFilter,
  payload: filter
});

export const setOrder = (orderValue) => {
  const orderObject = Object.entries(SORT_OPTIONS).find(
    (option) => option[1] === orderValue
  );

  return {
    type: types.uiSetOrder,
    payload: orderObject[0]
  };
};

export const resetFilter = () => ({ type: types.uiResetFilter });

export const resetOrder = () => ({ type: types.uiResetOrder });

export const showResults = () => ({
  type: types.uiShowResults
});
export const hiddenResults = () => ({
  type: types.uiHiddenResults
});
