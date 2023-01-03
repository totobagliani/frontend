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
      productName: 'Columna Inca',
      description:
        'Complemento ideal para cuarto de baño por su capacidad de almacenaje',
      imageURL: 'https://media.bahag.cloud/m/1280235/12.jpg',
      price: 79,
      section: 'baño',
    },
    {
      id: '595857919392',
      productName: 'Columna Inca',
      description:
        'Complemento ideal para cuarto de baño por su capacidad de almacenaje',
      imageURL: 'https://media.bahag.cloud/m/1280235/12.jpg',
      price: 90,
      section: 'habitaciones',
    },
  ],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
