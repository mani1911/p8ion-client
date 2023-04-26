import React, { useEffect, useState } from 'react';
import { Loader, Toast } from '../../Components';
import { Button, Flex, Center, Container } from '@mantine/core';
import CameraComponent from '../Camera/Camera';
import { useAppSelector, useAppDispatch } from '../../App/hooks';
import HeaderResponsive from '../../Components/Dashboard/Header';
import {
	useGetImagesQuery,
	useGetUserQuery,
	useParseImageMutation,
} from '../../Slices/User/userActions';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const value = useAppSelector((state) => state.User.username);
	const dispatch = useAppDispatch();
	const [cookie, setCookie] = useCookies();
	const [img, setImg] = useState('');
	const [parseImage, { isLoading, isSuccess }] = useParseImageMutation();

	async function captureImageHandler(img: string) {
		const data = await parseImage(img);
		console.log(data);
	}

	return (
		<Container h={'100vh'}>
			<Flex direction={'column'} align={'center'} justify={'center'}>
				<CameraComponent
					onImageCapture={async function (imag: string) {
						await captureImageHandler(imag);
					}}
				/>
				{isLoading ? <Loader /> : null}
			</Flex>
		</Container>
	);
};

export default Home;
