/* eslint-disable comma-dangle */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import configureStore from '../../redux/store';
import { setFilter, setOrder } from '../../redux/actions/ui.action';
import FilterBar from './FilterBar';

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

store.dispatch = jest.fn();

jest.mock('../../redux/actions/ui.action', () => ({
  setCurrentPage: jest.fn(),
  setFilter: jest.fn(),
  setOrder: jest.fn()
}));

describe('Given the FilterBar Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FilterBar />
        </BrowserRouter>
      </Provider>
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('then must be rendered (take a snapshot)', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <FilterBar />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<FilterBar />)).toMatchSnapshot();
  });
  test('when select a section in Select then call to handleSetFilter', () => {
    /*  const selectItems = screen.getByRole('combobox', {
      name: 'product-section'
    }); */
    const selectProduct = screen.getByDisplayValue(/productos/i);
    const optionCocina = screen.getByText(/Cocina - 0/i);

    userEvent.selectOptions(selectProduct, optionCocina);
    expect(optionCocina.value).toBe('Cocina');
    expect(setFilter).toHaveBeenCalled();
  });
  test('when select a order in Select then call to handleSetOrder', () => {
    const selectOrder = screen.getByDisplayValue(/Ordenar Por/i);
    const optionPrecio = screen.getByText(/precio - 0/i);
    userEvent.selectOptions(selectOrder, optionPrecio);
    expect(optionPrecio.value).toBe('precio');
    expect(setOrder).toHaveBeenCalled();
  });
});
