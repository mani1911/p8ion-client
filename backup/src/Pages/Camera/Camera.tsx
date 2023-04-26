import React, { useRef ,useState} from 'react';
import Webcam from 'react-webcam';
import {Center,Card,Grid,Divider, createStyles, Button, Progress,SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px, Flex,rem,Group } from '@mantine/core';
type Props = {
  onImageCapture: (imag: string) => void;
};

const CameraComponent= ({onImageCapture}:Props) => {
  const webcamRef = useRef<Webcam>(null);
  const [image,setImage]=useState<string|null|undefined>('');
  const [chk,setChk]=useState<Boolean>(true);
  const captureImage = () => {
    console.log(window.innerHeight)
    const imageSrc = webcamRef.current?.getScreenshot();

    console.log("hi")
    console.log(imageSrc)
    const temp=(imageSrc)?imageSrc:"aa";
    
      setImage(temp.replace(/^data:image\/\w+;base64,/, ''));
    
    
    setChk(false);
    //onImageCapture(imageSrc || '');
  };

  const retakeImage=()=>{
    setImage('');
    setChk(true);
  }

  const saveImage=()=>{
    onImageCapture(image || '');
    //backend call and redirect to dashboard
  }

  return (
    <div style={{paddingTop:"10%",objectFit:"contain",overscrollBehavior:'auto'}}>
    <Center style={{ objectFit:"contain"}}>

      <div style={{blockSize:'auto'}}>
        {image!='' && <div><img src={`data:image/jpeg;base64,${image}` } /></div>}
        {chk==true && <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          facingMode: 'environment',
          //sampleSize:'auto',
          width: 400,
          height:600,
        }}       
        />} 
      </div>
      
      
      </Center>
      <Center style={{paddingTop:"5%"}}>
        <Group>
          <Button disabled={!chk} onClick={captureImage}>Capture</Button>
      <Button disabled={!!chk} onClick={saveImage}> Save...</Button>
      <Button onClick={retakeImage}>Retake. </Button>
        </Group>
      
      </Center>
    </div>
  );
};

export default CameraComponent;
