import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const portfolioApi = createApi({
  reducerPath: 'portfolioApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    // Example endpoint for admin-managed content
    getStats: builder.query<{ views: number; likes: number }, void>({
      query: () => 'stats',
    }),
  }),
});

export const { useGetStatsQuery } = portfolioApi;
