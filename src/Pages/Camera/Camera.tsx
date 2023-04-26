import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import {
	Center,
	Card,
	Grid,
	Divider,
	createStyles,
	Button,
	Progress,
	SimpleGrid,
	Skeleton,
	Container,
	Stack,
	useMantineTheme,
	px,
	Flex,
	rem,
	Group,
} from '@mantine/core';
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
				<Button disabled={!chk} onClick={captureImage} w={'110px'}>
					Capture
				</Button>
				<Button disabled={!!chk} onClick={saveImage} w="100px">
					{' '}
					Save
				</Button>
				<Button onClick={retakeImage} w="100px">
					Retake
				</Button>
			</Flex>
		</Flex>
	);
};

export default CameraComponent;
