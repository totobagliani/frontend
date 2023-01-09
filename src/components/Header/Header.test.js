/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../redux/store';
import Header from './Header';

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
const store = configureStore(initialState);

describe('Given the Header Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
  });
  test('then must be rendered (take a snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<Header />)).toMatchSnapshot();
  });
});
