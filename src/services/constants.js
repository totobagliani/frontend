/* eslint-disable comma-dangle */
export const SECTIONS = {
  BAÑO: 'baño',
  DORMITORIO: 'dormitorio',
  COCINA: 'cocina',
  SALON: 'salon',
  TERRAZA: 'terraza',
  COMEDOR: 'comedor'
};

export const SORT_OPTIONS = {
  PRECIO: 'precio',
  NOMBRE: 'nombre',
  SECCION: 'seccion'
};

export const ADD_PRODUCT_INITIAL_STATE = {
  productName: '',
  description: '',
  imageURL: '',
  isFavourite: false,
  price: '',
  section: ''
};

export const ELEMENTS_PER_PAGE = 6;
export const MINIMUM_PAGE = 1;

export const UPLOADPRESET = 'flat101';
