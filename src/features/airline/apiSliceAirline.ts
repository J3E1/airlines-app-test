import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
	baseUrl: 'https://api.instantwebtools.net/v1/airlines',
});

export const apiSliceAirline = createApi({
	reducerPath: 'apiSliceAirline',
	baseQuery,
	tagTypes: ['Airline'],
	endpoints: builder => ({}),
});
