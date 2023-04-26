import Page from '../../Components/Dashboard/Page';
import Draw from '../../Components/Drawer/Drawer';
import HeaderResponsive from '../../Components/Dashboard/Header';
import { MantineProvider } from '@mantine/core';
function Dashboard() {
	return (
		<div>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					fontFamily: 'Poppins, sans-serif',
					fontSizes: {
						xs: '0.3rem',
						sm: '0.7rem',
						md: '1rem',
						lg: '1.8rem',
						xl: '2rem',
					},
				}}
			>
				<Draw />
				<Page />
			</MantineProvider>
		</div>
	);
}

export default Dashboard;
