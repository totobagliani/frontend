import { useSelector } from 'react-redux';

export const selectProductsByKey = (key) =>
  useSelector((state) => state?.products[key] || []);
