export const RouteKey = ['home', 'allPlants', 'potsAccessories','contactUs', 'iframe'] as const;
export type TRouteKey = (typeof RouteKey)[number];

export type TRoute = {
	path: string;
};
