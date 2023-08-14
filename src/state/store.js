
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice';
import login from './slices/loginSlice';
import product from './slices/productSlice';

const store = configureStore({ 
    reducer: {
        carts: cartSlice.reducer,
        logins: login.reducer,
        products: product.reducer,
    },
});

export default store;