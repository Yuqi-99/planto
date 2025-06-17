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
	contactUs: {
		path: '/contact-us',
	},
};
