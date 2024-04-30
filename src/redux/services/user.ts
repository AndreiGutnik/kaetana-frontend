import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { User } from '@/redux/types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://kaetana.onrender.com' }),
  endpoints: builder => ({
    getUserByName: builder.query<User, string>({
      query: name => `user/${name}`,
    }),
  }),
});

export const { useGetUserByNameQuery } = userApi;
