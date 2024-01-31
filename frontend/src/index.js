import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { BooksContextProvider } from './context/BooksContext';
import { OrderContextProvider } from './context/OrderContext';

const root = document.getElementById('root'); 

const app = (
  <React.StrictMode>
    <AuthContextProvider>
      <OrderContextProvider>
      <BooksContextProvider>
          <App />
      </BooksContextProvider>
      </OrderContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(app);
