import './App.css';
import { Navbar } from './app/components/Navbar/Navbar';
import { AppRouter } from './app/router/AppRouter';
import { store } from './store/store';
import { Provider } from 'react-redux';

function LaCalleApp() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <AppRouter />
      </div>
    </Provider>
  );
}

export default LaCalleApp;