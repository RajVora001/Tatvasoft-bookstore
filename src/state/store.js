
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice';
import login from './slices/loginSlice';
import product from './slices/productSlice';
import registrationSlice from './slices/registrationSlice'

const store = configureStore({ 
    reducer: {
        carts: cartSlice.reducer,
        logins: login.reducer,
        products: product.reducer,
        registration: registrationSlice.reducer
    },
});

export default store;