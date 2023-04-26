import React from 'react';
import { PageLoader } from '../../Components';
import { useAppDispatch } from '../../App/hooks';
import { logout } from '../../Slices/User/userSlice';

const Logout = () => {
	const dispatch = useAppDispatch();
	dispatch(logout());
	return <PageLoader />;
};

export default Logout;
