export const RouteKey = ['home'] as const;
export type TRouteKey = (typeof RouteKey)[number];

export type TRoute = {
	path: string;
};
