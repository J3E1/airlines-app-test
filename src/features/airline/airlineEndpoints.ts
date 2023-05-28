import { apiSliceAirline } from './apiSliceAirline';

export const airlineEndpoints = apiSliceAirline.injectEndpoints({
	endpoints: builder => ({
		getAllAirlines: builder.query({
			query: () => ({
				url: `/?page=1&size=10`,
				method: 'GET',
			}),
			providesTags: ['Airline'],
		}),
		getAirline: builder.query({
			query: (id: string) => ({
				url: `/${id}`,
				method: 'GET',
			}),
			providesTags: ['Airline'],
		}),
		createAirline: builder.mutation({
			query: (airline: Airline) => ({
				url: `/`,
				method: 'POST',
				body: airline,
			}),
			invalidatesTags: ['Airline'],
		}),
	}),
});

export const {
	useGetAirlineQuery,
	useGetAllAirlinesQuery,
	useCreateAirlineMutation,
} = airlineEndpoints;
