import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { BooksContextProvider } from './context/BooksContext';
import { AddressContextProvider } from './context/AddressContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BooksContextProvider>
        <AddressContextProvider>
        <App />
        </AddressContextProvider>
      </BooksContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
