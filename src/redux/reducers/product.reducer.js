import { types } from '../actiontypes';

export const PRODUCTS_STATE = {
  PRODUCTS: 'products',
  PRODUCT_ADDED: 'productAdded',
  ALL_PRODUCTS: 'allProducts',
  FILTERED_PRODUCTS: 'filteredProducts',
};

const initialState = {
  [PRODUCTS_STATE.PRODUCTS]: [],
  [PRODUCTS_STATE.PRODUCT_ADDED]: {
    productName: '',
    description: '',
    imageURL: '',
    isFavourite: false,
    price: 0,
    section: '',
  },
  [PRODUCTS_STATE.ALL_PRODUCTS]: [],
  [PRODUCTS_STATE.FILTERED_PRODUCTS]: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.productSetProducts:
      return {
        ...state,
        [PRODUCTS_STATE.PRODUCTS]: action.payload,
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
  id: '595857919392',
};
