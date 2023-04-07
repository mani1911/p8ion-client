import React, { FC, ReactComponentElement, createContext } from 'react';
import { User, useAuth } from './Hooks/index';
import config from '../../Config';

type Children = {
	children: string | JSX.Element | JSX.Element[];
};
export interface IAuthContext {
	user: User | null;
	login: (user: User | null) => void;
	logout: () => void;
}

// Auth Context
export const AuthContext = createContext<IAuthContext>({
	user: null,
	login: (user: User | null) => {},
	logout: () => {},
});

export const AuthProvider: FC<Children> = ({ children }) => {
	const { user, login, logout } = useAuth();
	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
