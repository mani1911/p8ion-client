import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login, PageNotFound } from '../Pages';
import routes from './routes';
import { Navbar, Protected } from '../Components';

const Router = () => {
	return (
		<>
			<BrowserRouter>
				{location.pathname == '/' ? null : <Navbar />}
				<Routes>
					<Route key="/" path="/" element={<Login />} />
					{routes.map((route) => {
						return (
							<Route
								key={route.path}
								path={route.path}
								element={<Protected>{route.element}</Protected>}
							/>
						);
					})}
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
