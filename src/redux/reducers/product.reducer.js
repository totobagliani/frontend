/* eslint-disable comma-dangle */
import { types } from '../actiontypes';

export const PRODUCTS_STATE = {
  PRODUCTS: 'products',
  PRODUCT_ADDED: 'productAdded',
  SEARCH_RESULTS: 'searchResults'
};

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

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.productSetProducts:
      return {
        ...state,
        [PRODUCTS_STATE.PRODUCTS]: action.payload
      };

    case types.productSetSearchResults:
      return {
        ...state,
        [PRODUCTS_STATE.SEARCH_RESULTS]: action.payload
      };
    case types.productAddProduct:
      return {
        ...state,
        [PRODUCTS_STATE.PRODUCTS]: [...state.products, action.payload]
      };

    default:
      return state;
  }
};

// eslint-disable-next-line no-unused-vars
const productSampleData = {
  productName: 'Columna Inca',
  description:
    'Complemento ideal para cuarto de baño por su capacidad de almacenaje',
  imageURL: 'https://media.bahag.cloud/m/1280235/12.jpg',
  price: 90,
  section: 'habitaciones',
  __v: 0,
  id: '595857919392'
};
