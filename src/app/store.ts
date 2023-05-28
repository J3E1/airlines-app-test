import { configureStore } from '@reduxjs/toolkit';
import { apiSliceAirline } from '../features/airline/apiSliceAirline';
import airlineReducer from '../features/airline/airlineSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
	reducer: {
		[apiSliceAirline.reducerPath]: apiSliceAirline.reducer,
		airline: airlineReducer,
		auth: authReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat([apiSliceAirline.middleware]),
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
