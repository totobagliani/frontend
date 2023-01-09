/* eslint-disable comma-dangle */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import { hiddenResults } from '../../redux/actions/ui.action';
import Results from './Results';

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
  hiddenResults: jest.fn()
}));

describe('Given the Header Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Results />
        </BrowserRouter>
      </Provider>
    );
  });
  test('The component is rendered (take a snapshot)', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Results />
      </Provider>
    );
    expect(asFragment(<Results />)).toMatchSnapshot();
  });
  test('then show the Results into screen', () => {
    expect(screen.getByText(/3 Items found/i)).toBeInTheDocument();
  });
  test('when press the cross called hidderResults action', () => {
    const crossIcon = screen.getByRole('img');
    userEvent.click(crossIcon);
    expect(hiddenResults).toHaveBeenCalled();
  });
  test('when the search has no results then show No results message', () => {
    const initialState2 = {
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
          searchTerm: 'nothing'
        }
      },
      ui: {
        currentPage: 1,
        currentFilter: '',
        currentOrder: '',
        resultsVisible: true
      }
    };
    const store2 = mockStore(initialState2);
    render(
      <Provider store={store2}>
        <BrowserRouter>
          <Results />
        </BrowserRouter>
      </Provider>
    );
    expect(
      screen.getByText(/No results found for nothing/i)
    ).toBeInTheDocument();
  });
});
