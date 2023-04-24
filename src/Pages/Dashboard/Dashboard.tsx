import Page from '../../Components/Dashboard/Page';
import HeaderResponsive from '../../Components/Dashboard/Header';
import { MantineProvider } from '@mantine/core';
function Dashboard() {
  return (
    <div>
      <MantineProvider withGlobalStyles withNormalizeCSS 
      theme={{
        fontFamily: 'Poppins, sans-serif',
        fontSizes: {
          xs: '0.6rem',
          sm: '1rem',
          md: '1.8rem',
          lg: '2.8rem',
          xl: '3rem',
        },
      }}>
        <HeaderResponsive/>
        <Page />
      </MantineProvider>
    </div>
  );
}

export default Dashboard;