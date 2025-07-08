import type { TRoute, TRouteKey } from '../types/routes';

export const ROUTES: Record<TRouteKey, TRoute> = {
	home: {
		path: '/',
	},
	allPlants: {
		path: '/all-plants',
	},
	potsAccessories: {
		path: '/pots-and-accessories',
	},
	contact: {
		path: '/contact-us',
	},
	aboutUs: {
		path: '/about-us',
	},
	policies: {
		path: '/policies',
	},
	shippingInfo: {
		path: '/shipping-information',
	},
	sourcingStandards: {
		path: '/sourcing-standards',
	},
	checkout: {
		path: '/checkout',
	},
};
