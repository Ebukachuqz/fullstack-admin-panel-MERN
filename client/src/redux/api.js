import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const adminApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers", "Transactions", "Geolocation"],
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
    getTransactions: builder.query({
      query: ({ sort, search, page, pageSize }) => ({
        url: "client/transactions",
        method: "GET",
        params: { sort, search, page, pageSize },
      }),
      providesTags: ["Transactions"],
    }),
    getUsersGeoLocation: builder.query({
      query: () => "client/geolocation",
      providesTags: ["Geolocation"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetAllProductswithStatQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetUsersGeoLocationQuery,
} = adminApi;
export default adminApi;
