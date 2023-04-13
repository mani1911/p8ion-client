import React, { useEffect } from 'react';
import { Toast } from '../../Components';
import { useCookies } from 'react-cookie';

const Home = () => {
	useEffect(() => {
		Toast('green', 'Login', 'Logged In Successfully');
	});

	return <div>Home</div>;
};

export default Home;
