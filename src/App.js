import './App.css';
import { Navbar } from './app/components/Navbar/Navbar';
import { AppRoutes } from './app/routes/AppRoutes';
import { store } from './store/store';
import { Provider } from 'react-redux';

function LaCalleApp() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default LaCalleApp;