import ReactDOM from 'react-dom/client';
import App from './App';
import { registerSW } from 'virtual:pwa-register';
import { MantineProvider } from '@mantine/core';
import { theme } from './Utils';
import { Notifications } from '@mantine/notifications';
import { Provider } from 'react-redux';
import { store } from './App/store';
import { CookiesProvider } from 'react-cookie';
const updateSW = registerSW({
	onNeedRefresh() {
		if (confirm('New content available. Reload?')) {
			updateSW(true);
		}
	},
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<MantineProvider withNormalizeCSS theme={theme}>
		<CookiesProvider>
			<Provider store={store}>
				<Notifications />
				<App />
			</Provider>
		</CookiesProvider>
	</MantineProvider>
);
