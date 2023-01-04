/* eslint-disable comma-dangle */
import { types } from '../actiontypes';

export const UI_STATE = {
  CURRENT_PAGE: 'currentPage',
  CURRENT_FILTER: 'currentFilter'
};

const initialState = {
  [UI_STATE.CURRENT_PAGE]: 1,
  [UI_STATE.CURRENT_FILTER]: ''
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetCurrentPage:
      return {
        ...state,
        [UI_STATE.CURRENT_PAGE]: action.payload
      };
    case types.uiIncrementedPage:
      return {
        ...state,
        [UI_STATE.CURRENT_PAGE]: action.payload
      };
    case types.uiDecrementedPage:
      return {
        ...state,
        [UI_STATE.CURRENT_PAGE]: action.payload
      };
    case types.uiSetFilter:
      return {
        ...state,
        [UI_STATE.CURRENT_FILTER]: action.payload
      };
    default:
      return state;
  }
};
