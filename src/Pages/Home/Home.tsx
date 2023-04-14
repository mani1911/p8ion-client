import React, { useEffect } from 'react';
import { Toast } from '../../Components';
import { Flex } from '@mantine/core';

const Home = () => {
	useEffect(() => {
		Toast('green', 'Login', 'Logged In Successfully');
	});

	return (
		<Flex
			bg="blue"
			justify="flex-center"
			direction="column"
			align="center"
			h="100vh"
		>
			Home
		</Flex>
	);
};

export default Home;
