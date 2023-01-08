/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { SORT_OPTIONS } from '../../services/constants';
import configureStore from '../../redux/store';
import CustomSelect from './CustomSelectProductsSection';

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

const sorts = Object.values(SORT_OPTIONS);

const selectProps = {
  selectName: 'product-order',
  selectTitle: ' Productos',
  classSelect: 'styles.filterbar__select',
  classTitle: 'styles.filterbar__optiontitle',
  classOption: 'styles.filterbar__option',
  optionValues: sorts
};

const handleMock = jest.fn();

const store = configureStore(initialState);

describe('Given the CustomSelect Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CustomSelect selectProps={selectProps} handleChange={handleMock} />
        </BrowserRouter>
      </Provider>
    );
  });
  test('then must be rendered (take a snapshot)', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CustomSelect selectProps={selectProps} handleChange={handleMock} />
        </BrowserRouter>
      </Provider>
    );
    expect(
      asFragment(
        <CustomSelect selectProps={selectProps} handleChange={handleMock} />
      )
    ).toMatchSnapshot();
  });

  test('when the option change then call to handlechange', () => {
    const selectItem = screen.getByRole('combobox', {
      options: { name: 'product-order' }
    });

    const optionItems = screen.getAllByRole('option', { value: 'Precio' });

    // console.log(optionItems[1]); Is the option con value = price

    userEvent.selectOptions(selectItem, optionItems[1]);
    expect(handleMock).toHaveBeenCalled();
    expect(optionItems[1].value).toBe('Precio');
    expect(optionItems[1].selected).toBe(true);
  });
});
