/* eslint-disable function-paren-newline */
import { useSelector } from 'react-redux';

export const selectProductsByKey = (key) =>
  useSelector((state) => state?.products[key] || []);

export const selectProductsByPage = (key, startPosition, endPosition) =>
  useSelector((state) =>
    state.products[key].filter(
      (item, index) =>
        item.indexOf(index) >= startPosition + 1 && index <= endPosition - 1
    )
  );
