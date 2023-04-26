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
      height = {350}
      width={300}
      radius='md'
      />
    </Group>
      <Group position="center">
          <Button variant="light" color="blue"  mt="sm" radius="md" size='sm' mb="sm" compact={true}>
          Translate<SiGoogletranslate></SiGoogletranslate>
          </Button>
          <Input component="select" size="sm">
        <option value="1">English</option>
        <option value="2">Tamil</option>
      </Input>
        </Group>
        {/* <Translate content= {content}/> */}
        <Group position='center'>
          <Speech content= {content} />
        </Group>
        {/* <Group position='center'>
          <Text size='md' mb='md'>
            {content.title}
          </Text>
        </Group> */}
      {content.description.map((str) => (
        <Drug key={content.title} data={str} />
      ))}
    </>
    );
}
export default ModalComponents;