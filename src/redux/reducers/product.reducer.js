export const PRODUCTS_STATE = {
  PRODUCTS: 'products',
  PRODUCT_ADDED: 'productAdded',
  ALL_PRODUCTS: 'allProducts',
  FILTERED_PRODUCTS: 'filteredProducts',
};

const initialState = {
  [PRODUCTS_STATE.PRODUCTS]: [
    {
      id: '595857919392',
      name: 'Columna Inca',
      description:
        'Complemento ideal para cuarto de baño por su capacidad de almacenaje',
      image: 'https://media.bahag.cloud/m/1280235/12.jpg',
      price: 79,
      section: 'baño',
    },
    {
      id: '595857919392',
      name: 'Columna Inca',
      description:
        'Complemento ideal para cuarto de baño por su capacidad de almacenaje',
      image: 'https://media.bahag.cloud/m/1280235/12.jpg',
      price: 79,
      section: 'baño',
    },
  ],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
