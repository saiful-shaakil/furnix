import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ state }) => ({
        url: `/products?state=${state}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
