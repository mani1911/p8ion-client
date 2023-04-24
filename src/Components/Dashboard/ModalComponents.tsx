import {Input,Text,Image, Group, Button} from '@mantine/core'
import { Content } from "./objects";
import {SiGoogletranslate} from "react-icons/si"
import Speech from './speech';
// import Translate from './Translate';
import Drug from './Drugs';
// import { useState } from "react"

function ModalComponents({content} : {content : Content}){
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
          <Button variant="light" color="blue"  mt="xl" radius="md" size='md' mb="xl">
          Translate<SiGoogletranslate></SiGoogletranslate>
          </Button>
          <Input component="select">
        <option value="1">English</option>
        <option value="2">Tamil</option>
      </Input>
        </Group>
        {/* <Translate content= {content}/> */}
        <Group position='center'>
          <Speech content= {content} />
        </Group>
        <Group position='center'>
          <Text size='lg' mb='xl'>
            {content.title}
          </Text>
        </Group>
      {content.description.map((str) => (
        <Drug key={content.title} data={str} />
      ))}
      
    </>
    );
}
export default ModalComponents;