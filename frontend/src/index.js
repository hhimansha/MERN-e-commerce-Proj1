import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { BooksContextProvider } from './context/BooksContext';

const root = document.getElementById('root'); 

const app = (
  <React.StrictMode>
    <AuthContextProvider>
      <BooksContextProvider>
          <App />
      </BooksContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(app);
