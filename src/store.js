import { configureStore } from '@reduxjs/toolkit';
import { productAPI } from './slices/productAPI';
import cartSlice from './slices/cartSlice';
import sidebarSlice from './slices/sidebarSlice';

const store = configureStore({
    reducer: {
        [productAPI.reducerPath]: productAPI.reducer,
        cart: cartSlice.reducer,
        sidebar: sidebarSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productAPI.middleware),
    devTools: true
});

export default store;
