/* eslint-disable comma-dangle */
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
