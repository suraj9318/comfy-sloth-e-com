import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Domain : - dev-b7c4122uvqgn6q7b.us.auth0.com
//clientId : - 

root.render(
    <Auth0Provider
        domain="dev-b7c4122uvqgn6q7b.us.auth0.com"
        clientId="quhNOxaGzWEejLfGbDgAKvKg57mo68T4"
        redirectUri={window.location.origin}
        cacheLocation='localstorage'>
            <UserProvider>
                <ProductsProvider>
                    <FilterProvider>
                        <CartProvider>
                            <App />
                        </CartProvider>
                    </FilterProvider>
                </ProductsProvider>
            </UserProvider>
</Auth0Provider>
);
