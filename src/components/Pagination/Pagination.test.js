/* eslint-disable comma-dangle */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';
import {
  setCurrentPage,
  previousPage,
  nextPage
} from '../../redux/actions/ui.action';

const mockData = require('../../services/mockproducts.json');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  products: {
    products: mockData.products,
    productAdded: {
      productName: '',
      description: '',
      imageURL: '',
      isFavourite: false,
      price: 0,
      section: ''
    },
    searchResults: {
      itemsCount: 3,
      searchTerm: 'algo'
    }
  },
  ui: {
    currentPage: 5,
    currentFilter: '',
    currentOrder: '',
    resultsVisible: true
  }
};

const store = mockStore(initialState);

store.dispatch = jest.fn();

jest.mock('../../redux/actions/ui.action', () => ({
  setCurrentPage: jest.fn(),
  previousPage: jest.fn(),
  nextPage: jest.fn()
}));

describe('Given the pagination Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination />
        </BrowserRouter>
      </Provider>
    );
    jest.clearAllMocks();
  });

  test('The component is redered (take a snapshot)', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );
    expect(asFragment(<Pagination />)).toMatchSnapshot();
  });
  test('when click the pages dispatch current page', () => {
    const pageNumber2 = screen.getAllByText(/2/)[0];
    userEvent.click(pageNumber2);
    expect(setCurrentPage).toHaveBeenCalled();
  });
  test('when click the next button dispatch next page', () => {
    const nextButton = screen.getAllByRole('button')[1];
    userEvent.click(nextButton);
    expect(nextPage).toHaveBeenCalledWith(initialState.ui.currentPage);
  });
  test('when click the previous button dispatch previous page', () => {
    const pageNumber3 = screen.getAllByText(/3/)[0];
    const prevButton = screen.getAllByRole('button')[0];

    userEvent.click(pageNumber3);

    userEvent.click(prevButton);
    expect(previousPage).toHaveBeenCalled();
  });
});
