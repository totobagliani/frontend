/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
import { addProduct, getAllProducts, searchProductsByTitleTerm } from './api';

describe('Given the getAllProducts function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('when the promise Resolves , expect some data', async () => {
    const fetchMock = jest
      .spyOn(global, 'fetch')
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve([]) })
      );
    const res = await getAllProducts();

    expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:5000/api/products/'
    );

    expect(res).toEqual([]);
  });
  test('when the promise Reject , expect a error', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue('error');
    const res = await getAllProducts();
    expect(res).toBe('error');
  });
});

describe('Given the searchProductsByTitleTerms function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('when the promise Resolves , expect some data', async () => {
    const term = 'termSearch';
    const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({ ok: true, result: [{ productName: term }] })
      })
    );

    const res = await searchProductsByTitleTerm('termSearch');

    expect(fetchMock).toHaveBeenCalledWith(
      `http://localhost:5000/api/products/search?term=${term}`
    );
    expect(res.ok).toBe(true);
  });
  test('when the promise Reject , expect a error', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue('error');
    const res = await searchProductsByTitleTerm('termSearch');
    expect(res).toBe('error');
  });
});

describe('Given the addProduct function', () => {
  const product = { productName: 'Yomismo' };
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('when the promise Resolves , expect response ok', async () => {
    const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ ok: true, result: product })
      })
    );

    const res = await addProduct(product);

    expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:5000/api/products/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(product)
      }
    );
    expect(res).toEqual({
      ok: true,
      result: { productName: product.productName }
    });
  });
  test('when the promise Reject , expect a error', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue('error');
    const res = await addProduct(product);

    expect(res).toBe('error');
  });
});
