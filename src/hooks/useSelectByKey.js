/* eslint-disable max-len */
import { useSelector } from 'react-redux';

// eslint-disable-next-line func-names
export default function (key) {
  const result = useSelector((state) => state.products[key]);
  //  const filteredProducts = useSelector(state=> state.products.products.filter(product => product.name === 'baño'))

  return result;
}
