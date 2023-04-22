import { Login, PageNotFound, Home, OAuthLoader,DashPg } from '../Pages';

interface Routes {
	title: string;
	path: `/${string}`;
	description: string;
	element: JSX.Element;
}

const routes: Routes[] = [
	{
		title: 'Login',
		path: '/',
		description: 'Login Page',
		element: <Login />,
	},
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
		element :<DashPg/>
	}
];

export default routes;
