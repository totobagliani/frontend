/* eslint-disable comma-dangle */
import { types } from '../actiontypes';
import { productsReducer } from './product.reducer';

const initialState = {
  [PRODUCTS_STATE.PRODUCTS]: [],
  [PRODUCTS_STATE.PRODUCT_ADDED]: {
    productName: '',
    description: '',
    imageURL: '',
    isFavourite: false,
    price: 0,
    section: ''
  },
  [PRODUCTS_STATE.SEARCH_RESULTS]: {
    itemsCount: 0,
    searchTerm: ''
  }
};

describe('Given the Products Reducer', () => {
  test('should return the state by default', () => {
    const action = {};
    const state = productsReducer(initialState, action);
    expect(state).toEqual(initialState);
  });
  test('when action is setProducts state have products', () => {
    const action = {
      type: types.productSetProducts,
      payload: [
        { productName: 'producto1' },
        { productName: 'producto2' },
        { productName: 'producto3' }
      ]
    };
    const state = productsReducer(initialState, action);
    expect(state[PRODUCTS_STATE.PRODUCTS].length).toBe(3);
  });
  test('when action is search_results state have count & searchTerm', () => {
    const action = {
      type: types.productSetSearchResults,
      payload: {
        itemsCount: 3,
        searchTerm: 'something'
      }
    };
    const state = productsReducer(initialState, action);
    expect(state[PRODUCTS_STATE.SEARCH_RESULTS]).toEqual({
      itemsCount: 3,
      searchTerm: 'something'
    });
  });
  test('when action is Addproduct state mujst add product', () => {
    const action = {
      type: types.productAddProduct,
      payload: { productName: 'producto1' }
    };
    const state = productsReducer(initialState, action);
    expect(state[PRODUCTS_STATE.PRODUCTS].length).toBe(1);
  });
});
