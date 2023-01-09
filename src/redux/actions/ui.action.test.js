/* eslint-disable comma-dangle */
import { types } from '../actiontypes';
import { nextPage, previousPage, setOrder } from './ui.action';

describe('Given the UI Action creators', () => {
  test('previous page decremented the page', () => {
    const page = 3;
    const action = previousPage(page);

    expect(action).toEqual({
      type: types.uiDecrementedPage,
      payload: page - 1
    });
  });
  test('next page incremented the page', () => {
    const page = 3;
    const action = nextPage(page);

    expect(action).toEqual({
      type: types.uiIncrementedPage,
      payload: page + 1
    });
  });
  test('Set order launch order', () => {
    const orderValue = 'precio';
    const action = setOrder(orderValue);

    expect(action).toEqual({
      type: types.uiSetOrder,
      payload: 'price'
    });
  });
});
