import { Store, configureStore } from '@reduxjs/toolkit';

import userReducer from '../Slices/User/userSlice';
import { apiSlice } from '../Slices/User/userActions';
export const store = configureStore({
	reducer: {
		User: userReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(apiSlice.middleware);
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
