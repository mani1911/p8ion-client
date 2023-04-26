import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PageNotFound } from '../Pages';
import routes from './routes';
import Draw from '../Components/Drawer/Drawer';

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{routes.map((route) => {
						return (
							<Route
								key={route.path}
								path={route.path}
								element={route.element}
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
