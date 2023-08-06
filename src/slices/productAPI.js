import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8888/.netlify/functions/',
  }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => '/products',
    }),
    fetchSingleProduct: builder.query({
      query: (id) => `/single-product?id=${id}`,
    }),
    fetchFeaturedProduct: builder.query({
      query: () => '/products/?filterByFormula=featured%3Dtrue',
    }),
  }),
});

export const {
  useFetchProductsQuery,
  useFetchFeaturedProductQuery,
  useFetchSingleProductQuery,
} = productAPI;
