/* eslint-disable comma-dangle */
import { types } from '../actiontypes';

export const UI_STATE = {
  CURRENT_PAGE: 'currentPage',
  ELEMENTS_PER_PAGE: 'elementsByPage'
};

const initialState = {
  [UI_STATE.CURRENT_PAGE]: 1,
  [UI_STATE.ELEMENTS_PER_PAGE]: 6
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetCurrentPage:
      return {
        ...state,
        [UI_STATE.CURRENT_PAGE]: action.payload
      };
    default:
      return state;
  }
};
