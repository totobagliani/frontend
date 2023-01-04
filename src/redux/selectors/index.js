/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable no-confusing-arrow */
/* eslint-disable function-paren-newline */
import { useSelector } from 'react-redux';
import { PRODUCTS_STATE } from '../reducers/product.reducer';
import { UI_STATE } from '../reducers/ui.reducer';
import { ELEMENTS_PER_PAGE } from '../../services/constants';

export const selectProductsByKey = (key) =>
  useSelector((state) => state?.products[key] || []);

export const selectProductsByFilter = (filterValue = '') =>
  filterValue
    ? useSelector((state) =>
        state.products[PRODUCTS_STATE.PRODUCTS].filter(
          (product) => product.section === filterValue
        )
      )
    : useSelector((state) => state.products[PRODUCTS_STATE.PRODUCTS]);

export const selectProductsByPage = (key, startPosition, endPosition) =>
  useSelector((state) =>
    state.products[key].filter(
      (item, index) =>
        item.indexOf(index) >= startPosition + 1 && index <= endPosition - 1
    )
  );

export const selectCurrentPage = () =>
  useSelector((state) => state?.ui[UI_STATE.CURRENT_PAGE] || 1);

export const selectCurrentFilter = () =>
  useSelector((state) => state?.ui[UI_STATE.CURRENT_FILTER]);

export const selectProductsByCurrentPage = () => {
  let products = selectProductsByKey(PRODUCTS_STATE.PRODUCTS);
  const currentPage = selectCurrentPage();

  // TODO crear un selector para el filter
  const filterValue = selectCurrentFilter();

  if (filterValue) {
    products = products.filter((product) => product.section === filterValue);
  }

  const initialPageIndex = (currentPage - 1) * ELEMENTS_PER_PAGE;
  const finalPageIndex = currentPage * ELEMENTS_PER_PAGE;

  const productsByCurrentPage = products.slice(
    initialPageIndex,
    finalPageIndex
  );
  // return products filter

  return productsByCurrentPage;
};
