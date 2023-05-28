import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
	userInfo: { email: string; password: string } | null;
}

const initialState: InitialState = {
	userInfo: localStorage.getItem('userInfo')
		? JSON.parse(localStorage.getItem('userInfo')!)
		: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (
			state,
			action: PayloadAction<{
				email: string;
				password: string;
			}>
		) => {
			state.userInfo = action.payload;
			localStorage.setItem('userInfo', JSON.stringify(action.payload));
		},
		loginWithGoogle: state => {
			state.userInfo = { email: 'test@gmail.com', password: 'test@password' };
			localStorage.setItem(
				'userInfo',
				JSON.stringify({ email: 'test@gmail.com', password: 'test@password' })
			);
		},
		logout: state => {
			state.userInfo = null;
			localStorage.removeItem('userInfo');
		},
	},
});

export const { login, logout, loginWithGoogle } = authSlice.actions;

export default authSlice.reducer;
