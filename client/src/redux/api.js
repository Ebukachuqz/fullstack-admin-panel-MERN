import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const adminApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getAllProductswithStat: builder.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: builder.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetAllProductswithStatQuery,
  useGetCustomersQuery,
} = adminApi;
export default adminApi;
