import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { BooksContextProvider } from './context/BooksContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BooksContextProvider>
        <App />
      </BooksContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
