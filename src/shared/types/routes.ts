export const RouteKey = [
	'home',
	'allPlants',
	'potsAccessories',
	'contact',
	'aboutUs',
	'policies',
	'shippingInfo',
	'sourcingStandards',
	'checkout',
	'paymentProcessing',
	'orderHistory',
] as const;
export type TRouteKey = (typeof RouteKey)[number];

export type TRoute = {
	path: string;
};
