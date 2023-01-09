/* eslint-disable comma-dangle */
import { types } from '../actiontypes';
import { uiReducer, UI_STATE } from './ui.reducer';

const initialState = {
  [UI_STATE.CURRENT_PAGE]: 1,
  [UI_STATE.CURRENT_FILTER]: '',
  [UI_STATE.CURRENT_ORDER]: '',
  [UI_STATE.RESULTS_VISIBLE]: false
};

describe('Given the uiReducer', () => {
  test('should return the state by default', () => {
    const action = {};
    const state = uiReducer(initialState, action);
    expect(state).toEqual(initialState);
  });
  test('when setCurrentPage Action  state must exists', () => {
    const action = {
      type: types.uiSetCurrentPage,
      payload: 3
    };

    const state = uiReducer(initialState, action);
    expect(state[UI_STATE.CURRENT_PAGE]).toBe(3);
  });

  test('when IncrementPage Action  state must saved', () => {
    const action = {
      type: types.uiIncrementedPage,
      payload: 3
    };

    const state = uiReducer(initialState, action);
    expect(state[UI_STATE.CURRENT_PAGE]).toBe(3);
  });

  test('when DecrementPage Action  state must saved', () => {
    const action = {
      type: types.uiDecrementedPage,
      payload: 3
    };

    const state = uiReducer(initialState, action);
    expect(state[UI_STATE.CURRENT_PAGE]).toBe(3);
  });

  test('when uiSetFilter Action  state must saved', () => {
    const action = {
      type: types.uiSetFilter,
      payload: 'cocina'
    };

    const state = uiReducer(initialState, action);
    expect(state[UI_STATE.CURRENT_FILTER]).toBe('cocina');
  });
  test('when uiSetOrder Action  state must saved', () => {
    const action = {
      type: types.uiSetOrder,
      payload: 'price'
    };

    const state = uiReducer(initialState, action);
    expect(state[UI_STATE.CURRENT_ORDER]).toBe('price');
  });
  test('when uiResetFilter Action  state must delete the filter', () => {
    const action = {
      type: types.uiResetFilter
    };

    const state = uiReducer(initialState, action);
    expect(state[UI_STATE.CURRENT_FILTER]).toBe('');
  });

  test('when uiResetOrder Action  state must delete the order', () => {
    const action = {
      type: types.uiResetOrder
    };

    const state = uiReducer(initialState, action);
    expect(state[UI_STATE.CURRENT_ORDER]).toBe('');
  });
  test('when uiShowResults Action  state must visible to true', () => {
    const action = {
      type: types.uiShowResults
    };

    const state = uiReducer(initialState, action);
    expect(state[UI_STATE.RESULTS_VISIBLE]).toBe(true);
  });
  test('when uihiddenResults Action  state must visible to false', () => {
    const action = {
      type: types.uiHiddenResults
    };

    const state = uiReducer(initialState, action);
    expect(state[UI_STATE.RESULTS_VISIBLE]).toBe(false);
  });
});
