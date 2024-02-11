import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { RoomsProvider } from './contexts/RoomsContext';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <RoomsProvider>
          <App />
        </RoomsProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);