import { configureStore } from '@reduxjs/toolkit';
import { productAPI } from './slices/productAPI';

const store = configureStore({
    reducer: {
        [productAPI.reducerPath]: productAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPI.middleware),
    devTools: true
})

export default store