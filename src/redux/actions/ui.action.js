import { types } from '../actiontypes';

export const setCurrentPage = (page) => ({
  type: types.uiSetCurrentPage,
  payload: page
});
