
import {Center,Card,Grid,Divider, createStyles, Button,Image, Progress,SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px, Flex,rem,Group, Menu, Text,  } from '@mantine/core';
import axios from 'axios';
import { Content } from "../../objects";
import {useState, useEffect, SetStateAction} from 'react'
import {SiGoogletranslate} from "react-icons/si"
//import Translate from '../Translate/Translate';
import Speech from './speech';


const projectId = '<YOUR_PROJECT_ID>';
const apiKey = '<YOUR_API_KEY>';
const baseUrl = 'https://translation.googleapis.com/language/translate/v2';

//const translator = new Translate.Translate();
const translateText = async (text: string, targetLang: string): Promise<string> => {
  const response = await axios.post(
    `${baseUrl}/`,
    {
      q: text,
      target: targetLang,
      format: 'text'
    },
    {
      params: {
        key: apiKey
      }
    }
  );
  const translation = response.data.data.translations[0].translatedText;
  return translation;
};


function ModalComponents({content} : {content : Content}){

    const [to,setTo]=useState('en')
  const [from,setFrom]=useState('en')


    const [text, setText] = useState(content.description);
  const [translatedText, setTranslatedText] = useState(content.description);

  
    const handleTranslate = () => {
      translateText(text, to).then((translation) => {
        setTranslatedText(translation)
      console.log(translation);
});
  }

    return (
    <>
    <Group position='center' align='auto'>
    < Image 
      src={content.image}
      height = {1000}
      width={800}
      radius='md'
      />
    </Group>
      <Group position="center">
          {/* <Button variant="light" color="blue"  mt="xl" radius="md" size='md' mb="xl">
          Translate<SiGoogletranslate></SiGoogletranslate>
          </Button> */}
          <Menu
      transitionProps={{ transition: 'pop-top-right' }}
      position="top-end"
      width={220}
      withinPortal
    >
      <Menu.Target>
        <Button  pr={12}>
          Translate
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={()=>{setTo('ta');handleTranslate}}>
          Tamil
        </Menu.Item>
        <Menu.Item onClick={()=>{setTo('en');handleTranslate}}>
          English
        </Menu.Item>
        <Menu.Item onClick={()=>{setTo('hi');handleTranslate}}>
          Hindi
        </Menu.Item>
        <Menu.Item onClick={()=>{setTo('fr');handleTranslate }}>
          French
        </Menu.Item >
        
      </Menu.Dropdown>
    </Menu>
          <Speech content= {content} />
        </Group>
        <Group position='center'>
          <Text size='lg' mb='xl'>
            {content.title}
          </Text>

        </Group>
      <Text>
        {translatedText}
      </Text>
      
    </>
    );
}
export default ModalComponents;