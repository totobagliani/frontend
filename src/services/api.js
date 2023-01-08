/* eslint-disable comma-dangle */
export const getAllProducts = async () => {
  const baseURL = process.env.REACT_APP_API_URL;
  const resourcePath = 'api/products';
  try {
    const resp = await fetch(`${baseURL}/${resourcePath}/`);
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const searchProductsByTitleTerm = async (term) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const resourcePath = 'api/products';
  const queryParam = 'search?term';
  try {
    const resp = await fetch(
      `${baseURL}/${resourcePath}/${queryParam}=${term}`
    );
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const addProduct = async (product) => {
  // localhost:5000/api/products/  -POST
  const baseURL = process.env.REACT_APP_API_URL;
  const resourcePath = 'api/products';

  try {
    const resp = await fetch(`${baseURL}/${resourcePath}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(product)
    });
    const result = await resp.json();
    return result;
  } catch (error) {
    return error;
  }
};
