import { Provider } from 'react-redux';
import configureStore from './redux/store';
import { AppRouter } from './routes/AppRouter';

function App() {
  return (
<<<<<<< HEAD
    <Provider store={configureStore()}>
      <AppRouter />
    </Provider>
=======
    <div className="App">
      <header className="App-header">
        <h1>Flat 101 Products</h1>
      </header>
    </div>
>>>>>>> 2bd445e7fabbea1829d5a2d01ede9eb6f2e32aac
  );
}

export default App;
