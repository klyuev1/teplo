import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import reportWebVitals from './reportWebVitals';
import { RoomsProvider } from './contexts/RoomsContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoomsProvider>
        <App />
      </RoomsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();