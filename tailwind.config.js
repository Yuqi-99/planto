/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

function half(value) {
	return value.replace(/\d+(.\d+)?/, (number) => number / 2);
}

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				mainBgColor: '#192116',
				headerBgColor: '#192116',
				footerBgColor: '#212C1C',
				'green-100': '#BCFFBEFF',
				'green-200': '#63A765',
				'green-300': '#4D504CFF',
				'green-400': '#3C433A',
				'green-600': '#3C433A',
				'green-700': '#252E22',
				'grey-300': '#C6C8C6',
				'grey-400': '#707070FF',
				'grey-600': '#020202FF',
				'darkGrey-darker': '#101010',
			},
			backgroundImage: {
				// 'topiary-green-pot':
				// 	"url('https://breath-natural-nextjs-chronicles.netlify.app/_next/static/media/topiary-green-pot.3f6d856c.webp')",
				'topiary-green-pot': "url('../background-plant.png')",
				'gradient-border': 'linear-gradient(to right, #3C433A, #FFFFFF)',
			},
			screens: {
				xs: '390px',
				sm: '641px',
				md: '769px',
				lg: '1025px',
			},
			zIndex: {
				menuSelection: 1000,
			},
		},
	},
	plugins: [
		require('tailwindcss-touch')(),
		plugin(({ addUtilities, e, theme, variants }) => {
			Object.entries(theme('gap')).forEach(([key, value]) =>
				addUtilities(
					{
						[`.flex-gap-${e(key)}`]: {
							margin: `-${half(value)}`,
							'& > *': {
								margin: half(value),
							},
						},
						[`.flex-gap-x-${e(key)}`]: {
							marginRight: `-${half(value)}`,
							marginLeft: `-${half(value)}`,
							'& > *': {
								marginRight: half(value),
								marginLeft: half(value),
							},
						},
						[`.flex-gap-y-${e(key)}`]: {
							marginTop: `-${half(value)}`,
							marginBottom: `-${half(value)}`,
							'& > *': {
								marginTop: half(value),
								marginBottom: half(value),
							},
						},
					},
					variants('gap')
				)
			);
		}),
	],
};
