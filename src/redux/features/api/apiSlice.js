import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "furnix",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:300/api",
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
