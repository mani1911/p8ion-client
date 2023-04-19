import React, { useEffect } from 'react';
import { Toast } from '../../Components';
import { Button, Flex } from '@mantine/core';
import { useAppSelector, useAppDispatch } from '../../App/hooks';

import {
	useGetImagesQuery,
	useGetUserQuery,
	useParseImageMutation,
} from '../../Slices/User/userActions';
import { useCookies } from 'react-cookie';

const Home = () => {
	const value = useAppSelector((state) => state.User.username);
	const dispatch = useAppDispatch();
	const [cookie, setCookie] = useCookies();

	const [parseImage] = useParseImageMutation();

	async function testPost() {
		const data = await parseImage('hello');
		console.log(data);
	}
	useEffect(() => {
		testPost();
	}, []);
	console.log('Cookie : ', cookie);
	return (
		<Flex
			bg="blue"
			justify="flex-center"
			direction="column"
			align="center"
			h="100vh"
		>
			{value}
		</Flex>
	);
};

export default Home;
