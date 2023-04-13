import { Button } from '@mantine/core';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { getOauthUrl } from '../../Utils/Oauth/oauth';

const Login: React.FC = () => {
	return (
		<>
			<Button
				styles={(theme) => ({
					root: {},
				})}
				leftIcon={<FcGoogle />}
				size="md"
				component="a"
				rel="noopener noreferrer"
				href={getOauthUrl()}
			>
				Login with Google
			</Button>
		</>
	);
};

export default Login;
