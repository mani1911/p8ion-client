import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import {
	Center,
	Button,
	Flex,
	UnstyledButton,
	Avatar,
} from '@mantine/core';
import {AiFillCamera} from "react-icons/ai";
type Props = {
	onImageCapture: (imag: string) => void;
};

const CameraComponent = ({ onImageCapture }: Props) => {
	const webcamRef = useRef<Webcam>(null);
	const [image, setImage] = useState<string | null | undefined>('');
	const [chk, setChk] = useState<Boolean>(true);
	const captureImage = () => {
		console.log(window.innerHeight);
		const imageSrc = webcamRef.current?.getScreenshot();
		console.log(imageSrc);
		const temp = imageSrc ? imageSrc : 'aa';

		setImage(temp.replace(/^data:image\/\w+;base64,/, ''));

		setChk(false);
		//onImageCapture(imageSrc || '');
	};

	const retakeImage = () => {
		setImage('');
		setChk(true);
	};

	const saveImage = () => {
		onImageCapture(image || '');
		//backend call and redirect to dashboard
	};

	return (
		<Flex direction="column">
			<Center style={{ objectFit: 'contain' }}>
				<div style={{ blockSize: 'auto' }}>
					{image != '' && (
						<div>
							<img src={`data:image/jpeg;base64,${image}`} />
						</div>
					)}
					{chk == true && (
						<Webcam
							ref={webcamRef}
							audio={false}
							screenshotFormat="image/jpeg"
							videoConstraints={{
								facingMode: 'environment',
								//sampleSize:'auto',
								width: 400,
								height: 600,
							}}
						/>
					)}
				</div>
			</Center>
			<Flex justify="center" gap="lg" mt="lg">
				<Button onClick={retakeImage} w="100px" mt={'10px'}>
					Retake
				</Button>
				<UnstyledButton disabled={!chk} onClick={captureImage} w={'60px'}>
				<Avatar size={60} color="blue" radius={30}><AiFillCamera/></Avatar>
				</UnstyledButton>
				<Button disabled={!!chk} onClick={saveImage} w="100px" mt={'10px'}>
					{' '}
					Save
				</Button>
			</Flex>
		</Flex>
	);
};

export default CameraComponent;
