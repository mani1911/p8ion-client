import { useState } from 'react';
import { Drawer, Burger } from '@mantine/core';

interface NavigationDrawerProps {
  opened: boolean;
  onClose: () => void;
}

function NavigationDrawer({ opened, onClose }: NavigationDrawerProps) {
  return (
    <Drawer opened={opened} onClose={onClose} overlayProps={{ opacity: 0.5, blur: 4 }} size="30%">
      <a href="/home">Home</a>
      <br></br>
      <a href="/dashboard">Dashboard</a>
      <br></br>
      <a href="/about">About</a>
      <br></br>
      <a href="/contact">Contact</a>
    </Drawer>
  );
}

function Draw() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Burger opened={isDrawerOpen} onClick={handleToggleDrawer} />
      <NavigationDrawer opened={isDrawerOpen} onClose={handleToggleDrawer} />
    </>
  );
}

export default Draw;
