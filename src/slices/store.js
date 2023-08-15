import { configureStore } from '@reduxjs/toolkit';
import { productAPI } from './productAPI';
import cartReducer from './cartReducer';
import sidebarReducer from './sidebarReducer';

const store = configureStore({
    reducer: {
        [productAPI.reducerPath]: productAPI.reducer,
        cart: cartReducer,
        sidebar: sidebarReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productAPI.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
