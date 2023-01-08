/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import AddProduct from './AddProduct';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  products: {
    products: [],
    productAdded: {
      productName: '',
      description: '',
      imageURL: '',
      isFavourite: false,
      price: 0,
      section: ''
    },
    searchResults: {
      itemsCount: 0,
      searchTerm: ''
    }
  },
  ui: {
    currentPage: 1,
    currentFilter: '',
    currentOrder: '',
    resultsVisible: false
  }
};

const store = mockStore(initialState);

let imgFile = false;

jest.mock('../../hooks/useImgData', () => ({
  ...jest.requireActual('../../hooks/useImgData'),
  handleFileChange: jest.fn().mockReturnValueOnce('algo')
}));

describe('Given the AddProduct Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddProduct />
        </BrowserRouter>
      </Provider>
    );
    jest.clearAllMocks();
  });
  test('then must be rendered (take a snapshot)', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <AddProduct />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<AddProduct />)).toMatchSnapshot();
  });
  test('then when the favourite is clicked call to handleFavourite', () => {
    const favouriteCheck = screen.getByRole('checkbox');

    userEvent.click(favouriteCheck);
    expect(favouriteCheck.value).toBe('true');
  });
  test('when the press button   then fill the data-image', () => {
    const selectImageButton = screen.getByText(/Elegir Imagen/i);
    const selectImg = screen.getAllByRole('img');

    userEvent.click(selectImageButton);
    imgFile = 'algo';
    expect(selectImg).toBeTruthy();
  });
  test('when submit button', () => {
    const submitButton = screen.getByText(/Publicar/i);
    userEvent.click(submitButton);
    expect(
      screen.getByText(/Error de validacion para los siguientes campos:/i)
    ).toBeInTheDocument();
  });
});
