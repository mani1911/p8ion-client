import React from 'react';
// import {Button} from '@mantine/core'
import Page from '../../Components/Dashboard/Page';
import HeaderResponsive from '../../Components/Dashboard/Header';
import Draw from '../../Components/Drawer/Drawer';

function DashPg() {
  return (
    <div className="App">
      <Draw/>
      <HeaderResponsive/>
      <Page />
    </div>
  );
}

export default DashPg
