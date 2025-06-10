/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { NotFoundPage } from './modules/errors/NotFoundPage';
import { HomePage } from './modules/home/HomePage';
import { ROUTES } from './shared/constants/routes';
import { RootLayout } from './shared/layouts/RootLayout';

const routes = createRoutesFromElements(
	<Route errorElement={<NotFoundPage />}>
		<Route path='/' element={<RootLayout />}>
			<Route path={ROUTES.home.path} element={<HomePage />} />
		</Route>
	</Route>
);

const router = createBrowserRouter(routes, {
	future: { v7_normalizeFormMethod: true } as any,
});

export const App = () => {
	return <RouterProvider router={router} />;
};
