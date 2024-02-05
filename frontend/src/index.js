import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ProteinsContextProvider } from './context/ProteinsContext';
import { OrderContextProvider } from './context/OrderContext';
import { CartProvider } from './context/CartContext';

const root = document.getElementById('root'); 

const app = (
  <React.StrictMode>
    <AuthContextProvider>
      <OrderContextProvider>
        <ProteinsContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProteinsContextProvider>
      </OrderContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(app);
