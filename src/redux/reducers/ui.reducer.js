/* eslint-disable comma-dangle */
import { types } from '../actiontypes';

export const UI_STATE = {
  CURRENT_PAGE: 'currentPage',
  CURRENT_FILTER: 'currentFilter',
  CURRENT_ORDER: 'currentOrder',
  RESULTS_VISIBLE: 'resultsVisible'
};

const initialState = {
  [UI_STATE.CURRENT_PAGE]: 1,
  [UI_STATE.CURRENT_FILTER]: '',
  [UI_STATE.CURRENT_ORDER]: '',
  [UI_STATE.RESULTS_VISIBLE]: false
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
    case types.uiSetOrder:
      return {
        ...state,
        [UI_STATE.CURRENT_ORDER]: action.payload
      };
    case types.uiResetFilter:
      return {
        ...state,
        [UI_STATE.CURRENT_FILTER]: ''
      };

    case types.uiResetOrder:
      return {
        ...state,
        [UI_STATE.CURRENT_ORDER]: ''
      };

    case types.uiShowResults: {
      return {
        ...state,
        [UI_STATE.RESULTS_VISIBLE]: true
      };
    }
    case types.uiHiddenResults: {
      return {
        ...state,
        [UI_STATE.RESULTS_VISIBLE]: false
      };
    }
    default:
      return state;
  }
};
