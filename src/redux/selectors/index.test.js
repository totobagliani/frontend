/* eslint-disable comma-dangle */
import { useSelector } from 'react-redux';
import {
  selectProductsByFilter,
  selectProductsByPage,
  selectProductsByCurrentPage
} from '.';

const mockData = require('../../services/mockproducts.json');

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
}));

describe('Given the selectors', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('When  SelectProductsByFilter', () => {
    test('selectProductsByFilter with filter return the products filtered', () => {
      useSelector.mockReturnValue(mockData.products);
      const productsFiltered = selectProductsByFilter('cocina');

      expect(useSelector).toHaveBeenCalled();
      expect(productsFiltered).toBeInstanceOf(Array);
    });
    test('selectProductsByFilter WITHOUT filter return ALL the products', () => {
      useSelector.mockReturnValue([mockData.products]);
      const products = selectProductsByFilter();

      expect(useSelector).toHaveBeenCalled();
      expect(products).toBeInstanceOf(Array);
    });
  });
  test('selectProductsByPage return products', () => {
    useSelector.mockReturnValue(mockData.products);
    const products = selectProductsByPage('products', 2, 6);

    expect(useSelector).toHaveBeenCalled();
    expect(products).toBeInstanceOf(Array);
  });
  describe('When selectProductsByCurrentPage', () => {
    test('Con todos los parametros', () => {
      useSelector.mockReturnValue(mockData.products);

      const productByCurrentPage = selectProductsByCurrentPage();

      expect(productByCurrentPage).toBeInstanceOf(Array);
    });
  });
});
