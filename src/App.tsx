/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { AboutUs } from './modules/contacts/AboutUs';
import { NotFoundPage } from './modules/errors/NotFoundPage';
import { HomePage } from './modules/home/HomePage';
import { AllPlantsPage } from './modules/products/AllPlantsPage';
import { PotsAndAccessories } from './modules/products/PotsAndAccessories';
import { ROUTES } from './shared/constants/routes';
import { RootLayout } from './shared/layouts/RootLayout';
import { Policies } from './modules/contacts/Policies';
import { ContentLayout } from './shared/layouts/ContentLayout';
import { ShippingInfo } from './modules/contacts/ShippingInfo';
import { SourcingStandards } from './modules/contacts/SourcingStandards';
import { ContactUs } from './modules/contacts/ContactUs';
import { CheckoutPage } from './modules/checkout/CheckoutPage';
import { PaymentProcessingPage } from './modules/checkout/PaymentProcessingPage';
import { OrderHistory } from './modules/order/OrderHistory';

const routes = createRoutesFromElements(
	<Route errorElement={<NotFoundPage />}>
		<Route path='/' element={<RootLayout />}>
			<Route path={ROUTES.home.path} element={<HomePage />} />
			<Route path={ROUTES.home.path} element={<ContentLayout />}>
				<Route path={ROUTES.allPlants.path} element={<AllPlantsPage />} />
				<Route path={ROUTES.potsAccessories.path} element={<PotsAndAccessories />} />
				<Route path={ROUTES.contact.path} element={<ContactUs />} />
				<Route path={ROUTES.aboutUs.path} element={<AboutUs />} />
				<Route path={ROUTES.policies.path} element={<Policies />} />
				<Route path={ROUTES.shippingInfo.path} element={<ShippingInfo />} />
				<Route path={ROUTES.sourcingStandards.path} element={<SourcingStandards />} />
				<Route path={ROUTES.checkout.path} element={<CheckoutPage />} />
				<Route path={ROUTES.paymentProcessing.path} element={<PaymentProcessingPage />} />
				<Route path={ROUTES.orderHistory.path} element={<OrderHistory />} />
			</Route>
		</Route>
	</Route>
);

const router = createBrowserRouter(routes, {
	future: { v7_normalizeFormMethod: true } as any,
});

export const App = () => {
	return <RouterProvider router={router} />;
};
