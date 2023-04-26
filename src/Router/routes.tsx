import {
	Dashboard,
	Login,
	PageNotFound,
	Home,
	OAuthLoader,
	Logout,
} from '../Pages';

interface Routes {
	title: string;
	path: `/${string}`;
	description: string;
	element: JSX.Element;
}

const routes: Routes[] = [
	{
		title: 'Page Not Found',
		path: '/404',
		description: 'Page not found',
		element: <PageNotFound />,
	},
	{
		title: 'Home',
		path: '/home',
		description: 'Home Page',
		element: <Home />,
	},
	{
		title: 'OAuthLoader',
		path: '/oauth',
		description: 'OAuth Loader',
		element: <OAuthLoader />,
	},
	{
		title: 'Dashboard',
		path: '/dashboard',
		description: 'Dashboard',
		element: <Dashboard />,
	},
	{
		title: 'Logout',
		path: '/logout',
		description: 'logout',
		element: <Logout />,
	},
];

export default routes;
