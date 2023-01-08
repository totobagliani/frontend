/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
import { getAllProducts } from './api';

describe('given the getAllProducts function', () => {
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
  test('when the promise Reject , expect some data', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue('testValue');
    const res = await getAllProducts();
    expect(res).toBe('testValue');
  });
});
