import { useState } from 'react';
import { Drawer, Burger, Group, Text, Button } from '@mantine/core';
import {AiOutlineInfoCircle,AiOutlineHome} from "react-icons/ai";
import {RxDashboard,} from "react-icons/rx";
import {RiContactsLine} from "react-icons/ri";
interface NavigationDrawerProps {
  opened: boolean;
  onClose: () => void;
}

function NavigationDrawer({ opened, onClose }: NavigationDrawerProps) {
  return (
    <Drawer opened={opened} onClose={onClose} overlayProps={{ opacity: 0.5, blur: 4 }} size="40%" withCloseButton={false} transitionProps={{ transition: 'fade', duration: 250, timingFunction: 'linear' }}>
      <Drawer.Title><Text size="lg">P8ion</Text></Drawer.Title>
      <Text size="md">
      <br/>
      <a href="/home"><AiOutlineHome/> Home</a>
      <br></br>
      <br/>
      <a href="/dashboard"><RxDashboard/> Dashboard</a>
      <br></br>
      <br/>
      <a href="/about"><AiOutlineInfoCircle/> About</a>
      <br></br>
      <br/>
      <a href="/contact"><RiContactsLine/> Contact</a>
      </Text>
    </Drawer>
  );
}

function Draw() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Group>
      <Burger opened={isDrawerOpen} onClick={handleToggleDrawer} />
      <NavigationDrawer opened={isDrawerOpen} onClose={handleToggleDrawer} />
    </Group>
  );
}

export default Draw;
``