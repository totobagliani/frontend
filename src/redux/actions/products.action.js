import { getAllProducts, searchProductsByTitleTerm } from '../../services/api';
import { types } from '../actiontypes';

const setProducts = (products) => ({
  type: types.productSetProducts,
  payload: products
});

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
  } catch (error) {
    return error.message;
  }
};
