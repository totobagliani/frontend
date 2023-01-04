/* eslint-disable operator-linebreak */
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './reducers/product.reducer';
import { uiReducer } from './reducers/ui.reducer';

export default function configureStore(preLoadState) {
  const rootReducer = combineReducers({
    products: productsReducer,
    ui: uiReducer
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    preLoadState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
