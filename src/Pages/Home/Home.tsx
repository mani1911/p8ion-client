import React, { useEffect ,useState} from 'react';
import { Toast } from '../../Components';
import { Button, Flex,Center } from '@mantine/core';
import CameraComponent from '../Camera/Camera';
import { useAppSelector, useAppDispatch } from '../../App/hooks';
import Draw from '../../Components/Drawer/Drawer'
import HeaderResponsive from '../../Components/Dashboard/Header';
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
	const [img,setImg]=useState('')
	const [parseImage] = useParseImageMutation();

	async function testPost() {
		const data = await parseImage(img);
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
		<div style={{width:300}}>
			<Draw></Draw>
			
      <Center>
        
          <CameraComponent onImageCapture={function (imag: string): void {
					setImg(imag);
					console.log("what")
					console.log(imag)
					console.log(img);
				} } />
        
      </Center>
      
      
    </div>
	);
};

export default Home;
