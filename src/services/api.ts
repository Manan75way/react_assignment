import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4001/api",
    prepareHeaders: (headers, { getState}) => {
      const token = (getState() as RootState).user.token;
      console.log(token);

      if (token) {
        console.log(token);
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
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
    getAllUser: builder.query<any,string>({
      query: () => "user/all"
    }),
  }),
});

export const { useRegisterNewUserMutation, useLoginUserMutation,useGetAllUserQuery } = api;
