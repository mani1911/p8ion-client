import React, { useEffect } from 'react';
import { Toast } from '../../Components';
import { Button, Flex,Center } from '@mantine/core';
import CameraComponent from '../Camera/Camera';
import { useAppSelector, useAppDispatch } from '../../App/hooks';
import Draw from '../../Components/Drawer/Drawer'
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
		Toast('green', 'Login', 'Logged In Successfully');
	});
	useEffect(() => {
		testPost();
	}, []);
	console.log('Cookie : ', cookie);
	return (
		<div className='main'>
			<Draw></Draw>
      <Center>
        
          <CameraComponent />
        
      </Center>
      
      
    </div>
	);
};

export default Home;
