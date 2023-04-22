import React from 'react'
import {useState, useEffect} from 'react'
import {Center,Card,Grid,Divider, createStyles, Button, Progress,SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px, Flex,rem,Group, Menu, Text,  } from '@mantine/core';

const Translate = () => {
  const [to,setTo]=useState('')
  const [from,setFrom]=useState('')
  const [input,setInput]=useState('')
  const [output,setOutput]=useState('')

  /* useEffect(()=>{
    axios.get()
  }) */

  const theme = useMantineTheme();
  return (
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
        <Menu.Item>
          Tamil
        </Menu.Item>
        <Menu.Item>
          English
        </Menu.Item>
        <Menu.Item>
          Hindi
        </Menu.Item>
        <Menu.Item>
          Japanese
        </Menu.Item>
        
      </Menu.Dropdown>
    </Menu>
  );
}

export default Translate