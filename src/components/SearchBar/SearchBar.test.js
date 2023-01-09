import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';
import {
  resetFilter,
  resetOrder,
  showResults
} from '../../redux/actions/ui.action';

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
      itemsCount: 3,
      searchTerm: 'algo'
    }
  },
  ui: {
    currentPage: 1,
    currentFilter: '',
    currentOrder: '',
    resultsVisible: true
  }
};

const store = mockStore(initialState);

store.dispatch = jest.fn();

jest.mock('../../redux/actions/ui.action', () => ({
  resetFilter: jest.fn(),
  resetOrder: jest.fn(),
  showResults: jest.fn()
}));

describe('Given the SearchBar component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchBar />
        </BrowserRouter>
      </Provider>
    );
    jest.clearAllMocks();
  });

  test('The component is rendered (take a snapshot)', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    expect(asFragment(<SearchBar />)).toMatchSnapshot();
  });

  test('when click on the button set the input', () => {
    const button = screen.getByRole('img');

    userEvent.click(button);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
  test('when click on the button twice hidden the input', () => {
    const button = screen.getByRole('img');
    userEvent.click(button);
    const searchText = screen.getByRole('searchbox');
    expect(searchText).toBeInTheDocument();
    userEvent.click(button);
    expect(searchText).not.toBeInTheDocument();
  });
  test('when hace a search test dispatch the acctions', () => {
    const button = screen.getByRole('img');
    userEvent.click(button);
    const searchText = screen.getByRole('searchbox');
    const content = userEvent.type(searchText, 'mesa');
    expect(searchText).toHaveValue(content);
    userEvent.click(button);
    expect(resetFilter).toHaveBeenCalled();
    expect(resetOrder).toHaveBeenCalled();
    expect(showResults).toHaveBeenCalled();
  });
});
