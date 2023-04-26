import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { removeCookies } from '../../Utils/General';

interface IUserState {
	username: string | null;
	email: string | null;
	isLogged: boolean;
	isDrawerOpen: boolean;
}

const initialState: IUserState = {
	username: null,
	email: null,
	isLogged: false,
	isDrawerOpen: false,
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
			state.email = null;
			state.isDrawerOpen = false;
			removeCookies();
		},
		toggleDrawer(state) {
			state.isDrawerOpen = state.isDrawerOpen ? false : true;
		},
	},
});

export const { logout, login, toggleDrawer } = userSlice.actions;
export default userSlice.reducer;
