import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
	username: string | null;
	email: string | null;
	isLogged: boolean;
}

const initialState: IUserState = {
	username: null,
	email: null,
	isLogged: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login(state, action: PayloadAction<IUserState>) {
			console.log('Logging...');
			state.username = action.payload.username;
			state.email = action.payload.email;
			state.isLogged = true;
		},
		logout(state) {
			state.username = null;
			state.isLogged = false;
		},
	},
});

export const { logout, login } = userSlice.actions;
export default userSlice.reducer;
