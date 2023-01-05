/* eslint-disable comma-dangle */
import { uploadFileToCloud } from '../../helpers/uploadFile';
import {
  addProduct,
  getAllProducts,
  searchProductsByTitleTerm
} from '../../services/api';
import { types } from '../actiontypes';

const setProducts = (products) => ({
  type: types.productSetProducts,
  payload: products
});

export const setSearchResults = (results, searchTerm) => ({
  type: types.productSetSearchResults,
  payload: {
    itemsCount: results.length,
    searchTerm
  }
});

export const addProductAction = (product) => ({
  type: types.productAddProduct,
  payload: product
});

export const startAddProduct = (imgFile, product) => async (dispatch) => {
  try {
    const imageURL = await uploadFileToCloud(imgFile);
    const productToAdd = { ...product, imageURL };

    const resp = await addProduct(productToAdd);

    if (resp.ok) {
      const { newProduct } = resp;

      dispatch(addProductAction(newProduct));
    }
    return resp;
  } catch (error) {
    return error;
  }
};

export const startGetAllProducts = () => async (dispatch) => {
  try {
    const result = await getAllProducts();
    if (!result.ok) {
      return result.message;
    }
    dispatch(setProducts(result.products));
  } catch (error) {
    return error.message;
  }
};

export const startSearchProducts = (term) => async (dispatch) => {
  try {
    const resp = await searchProductsByTitleTerm(term);
    if (!resp.ok) {
      return resp.message;
    }

    dispatch(setProducts(resp.result));
    dispatch(setSearchResults(resp.result, term));
  } catch (error) {
    return error.message;
  }
};
