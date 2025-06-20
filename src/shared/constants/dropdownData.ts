import { ROUTES } from './routes';

export const SHOP_DROPDOWN = [
	{
		id: 1,
		title: 'All Plants',
		navigate: ROUTES.allPlants.path,
	},
	{
		id: 2,
		title: 'Pots and Accessories',
		navigate: ROUTES.potsAccessories.path,
	},
];

export const CONTACT_US_DROPDOWN = [
	{
		id: 1,
		title: 'Contact',
		navigate: ROUTES.contact.path,
	},
	{
		id: 2,
		title: 'About Us',
		navigate: ROUTES.aboutUs.path,
	},
	{
		id: 3,
		title: 'Policies',
		navigate: ROUTES.policies.path,
	},
	{
		id: 4,
		title: 'Shipping Information',
		navigate: ROUTES.shippingInfo.path,
	},
	{
		id: 5,
		title: 'Sourcing Standards',
		navigate: ROUTES.sourcingStandards.path,
	},
];
