import { Button, Flex, Image } from '@mantine/core';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { getOauthUrl } from '../../Utils/Oauth/oauth';

const Login: React.FC = () => {
	return (
		<>
			<Flex
				justify="center"
				rowGap="10%"
				direction="column"
				align="center"
				h="100vh"
				bg="#0d0121"
				styles={(theme) => ({
					root: {
						backgroundColor: theme.colors.orange,
					},
				})}
			>
				<Image maw={240} radius="md" src="/mask-icon-white-bg.png" />
				<Button
					styles={(theme) => ({
						root: {
							background: theme.colors.white,
							color: theme.colors.black,
						},
					})}
					leftIcon={<FcGoogle />}
					size="md"
					component="a"
					rel="noopener noreferrer"
					href={getOauthUrl()}
				>
					Login with Google
				</Button>
			</Flex>
		</>
	);
};

export default Login;
