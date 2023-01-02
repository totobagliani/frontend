import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './App.css';
import { AppRouter } from './routes/AppRouter';

function App() {
  return (
    <Provider store={configureStore()}>
      <AppRouter />
    </Provider>
  );
}

export default App;
