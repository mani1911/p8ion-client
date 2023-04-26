import { useCookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router-dom';
import { Toast } from '../../Components';
import { useEffect } from 'react';
import classes from './styles.module.css';
import { useAppDispatch } from '../../App/hooks';
import { login } from '../../Slices/User/userSlice';
import { createStyles } from '@mantine/core';

const OAuthLoader = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [cookies, setCookies] = useCookies();
	const dispatch = useAppDispatch();
	useEffect(() => {
		const jwt = new URLSearchParams(location.search).get('jwt');
		const error = new URLSearchParams(location.search).get('error');
		const username = new URLSearchParams(location.search).get('user');
		const email = new URLSearchParams(location.search).get('email');

		if (error) {
			Toast('red', 'Oops!', error);
			navigate('/');
		} else if (jwt == null || jwt == '') {
			Toast('red', 'Try again later!', 'There seems to be an issue.');
			navigate('/');
		} else {
			Toast('green', 'Login', 'Successfully Logged In');
			setCookies('jwt', jwt, {
				path: '/',
				expires: new Date(Date.now() + 864000000000),
			});

			const user = {
				username,
				email,
				isLogged: true,
			};
			dispatch(login(user));
			navigate('/home');
		}
	}, []);

	return (
		<div className={classes.wrapper}>
			<div className={classes['cssload-container']}>
				<div className={classes['cssload-loading']}>
					<i></i>
					<i></i>
					<i></i>
					<i></i>
				</div>
			</div>
		</div>
	);
};

export default OAuthLoader;
