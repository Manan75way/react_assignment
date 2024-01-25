import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UseStore } from "react-redux";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4001/api" }),
  endpoints: (builder) => ({
    registerNewUser: builder.mutation<User, RegisterUsers>({
      query: (body) => ({
        url: `/auth/register`,
        method: "POST",
        body,
      }),
    }),
    loginUser: builder.mutation<User, LoginUser>({
      query: (body) => ({
        url: `/auth/login`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterNewUserMutation,useLoginUserMutation } = api;
