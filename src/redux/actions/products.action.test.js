/* eslint-disable comma-dangle */
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { types } from '../actiontypes';
import {
  addProduct,
  getAllProducts,
  searchProductsByTitleTerm
} from '../../services/api';

import {
  startGetAllProducts,
  setProducts,
  addProductAction,
  startAddProduct,
  startSearchProducts
} from './products.action';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// mockS

const dispatch = jest.fn();

jest.mock('../../services/api', () => ({
  addProduct: jest.fn(),
  getAllProducts: jest.fn(),
  searchProductsByTitleTerm: jest.fn()
}));

const initialState = {
  products: {
    products: [],
    productAdded: {
      productName: '',
      description: '',
      imageURL: '',
      isFavourite: false,
      price: 0,
      section: ''
    },
    searchResults: {
      itemsCount: 3,
      searchTerm: 'algo'
    }
  },
  ui: {
    currentPage: 1,
    currentFilter: '',
    currentOrder: '',
    resultsVisible: true
  }
};
let store = mockStore(initialState);

describe('Given the Products Action creators', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('SetProducts return action with Products', () => {
    const products = ['product1', 'product2'];
    const action = setProducts(products);
    expect(action).toEqual({
      type: types.productSetProducts,
      payload: products
    });
  });

  test('startGetAllProducts return action products', async () => {
    getAllProducts.mockResolvedValue({
      ok: true,
      products: [{ productName: 'producto1' }, { productName: 'producto2' }]
    });

    await store.dispatch(startGetAllProducts());
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      payload: expect.any(Array),
      type: types.productSetProducts
    });
  });
  test('startGetAllProducts the response NOT ok', async () => {
    getAllProducts.mockResolvedValue({
      ok: false,
      message: 'something wrong'
    });

    const wrongResponse = await startGetAllProducts()(dispatch);

    expect(wrongResponse).toEqual('something wrong');
  });

  test('when something get wrong startGetAllProducts must return a error ', async () => {
    getAllProducts.mockRejectedValue('Start error');
    const error = await startGetAllProducts()(dispatch);
    expect(error).toBe('Start error');
  });

  test('Add productAction', () => {
    const product = { productName: 'un producto' };
    const action = addProductAction(product);
    expect(action).toEqual({
      type: types.productAddProduct,
      payload: product
    });
  });

  test('startproductAction must dispatch addProductAction', async () => {
    const product = { productName: 'un producto' };
    const imgFile = 'ficheroImagen';
    addProduct.mockResolvedValue({
      ok: true,
      newProduct: product
    });
    await startAddProduct(imgFile, product)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      payload: product,
      type: types.productAddProduct
    });
  });

  test('startproductAction the response NOT ok', async () => {
    const product = { productName: 'un producto' };
    const imgFile = 'ficheroImagen';
    addProduct.mockResolvedValue({
      ok: false,
      message: 'something wrong'
    });
    const wrongResponse = await startAddProduct(imgFile, product)(dispatch);

    expect(wrongResponse.message).toEqual('something wrong');
  });

  test('when startAddproductAction are rejected then return a error', async () => {
    const product = { productName: 'un producto' };
    const imgFile = 'ficheroImagen';
    addProduct.mockRejectedValue('Un error');
    const error = await startAddProduct(imgFile, product)(dispatch);
    expect(error).toBe('Un error');
  });

  test('startSearchProducts must dispatch setProducts setSearchResults actions', async () => {
    const term = 'Termino';
    searchProductsByTitleTerm.mockResolvedValue({
      ok: true,
      result: [{ productName: 'Termino1' }, { productName: 'Termino2' }]
    });

    await store.dispatch(startSearchProducts(term));
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      payload: expect.any(Array),
      type: types.productSetProducts
    });

    expect(actions[1]).toEqual({
      payload: {
        itemsCount: expect.any(Number),
        searchTerm: term
      },
      type: types.productSetSearchResults
    });
  });
  test('startSearchProducts the response NOT ok', async () => {
    const term = 'Termino';
    searchProductsByTitleTerm.mockResolvedValue({
      ok: false,
      message: 'something wrong'
    });

    const wrongResponse = await startSearchProducts(term)(dispatch);

    expect(wrongResponse).toEqual('something wrong');
  });
  test('when something get wrong startSearchProducts must return a error ', async () => {
    const term = 'Termino';
    searchProductsByTitleTerm.mockRejectedValue('Start error');
    const error = await startSearchProducts(term)(dispatch);
    expect(error).toBe('Start error');
  });
});
