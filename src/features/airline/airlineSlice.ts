import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface InitialState {
	currentAirline: Airline | null;
	airlines: Airline[] | null;
}
const initialState: InitialState = {
	currentAirline: null,
	airlines: null,
};

const airlineSlice = createSlice({
	name: 'airline',
	initialState,
	reducers: {
		setCurrentAirline: (state, action: PayloadAction<Airline>) => {
			state.currentAirline = action.payload;
		},
		setAirlines: (state, action: PayloadAction<Airline[]>) => {
			state.airlines = action.payload;
		},
		updateAirline: (state, action: PayloadAction<Airline>) => {
			state.airlines = state.airlines?.map(airline => {
				if (airline.id === action.payload.id) {
					return action.payload;
				}
			}) as Airline[];
		},
		deleteAirline: (state, action: PayloadAction<Airline>) => {
			state.airlines = state.airlines?.filter(
				airline => airline.id !== action.payload.id
			) as Airline[];
		},
		reset: state => {
			state.currentAirline = null;
			state.airlines = null;
		},
	},
});

export const {
	setCurrentAirline,
	setAirlines,
	updateAirline,
	deleteAirline,
	reset,
} = airlineSlice.actions;

export default airlineSlice.reducer;
