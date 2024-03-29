/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				title: ['Houji', ...defaultTheme.fontFamily.serif],
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				black: '#151515',
				white: '#fdfdfd',
				gold: '#eaff00',
			},
			container: {
				center: true,
				padding: '2rem',
			},
			gridTemplateColumns: {
				18: 'repeat(18, minmax(0, 1fr))',
				22: 'repeat(22, minmax(0, 1fr))',
				24: 'repeat(24, minmax(0, 1fr))',
			},
			animation: {
				openmenu: 'openmenu 0.5s ease-in both',
				closemenu: 'closemenu 0.5s ease-in both',
				slideleft: 'slideleft 2s both',
			},
			keyframes: {
				slideleft: {
					'0%': { transform: 'translateX(200px)', opacity: 0 },
					'100%': { transform: 'translateX(0)', opacity: 1 },
				},
				openmenu: {
					'0%': { top: '-400px' },
					'100%': { top: '0px' },
				},
				closemenu: {
					'0%': { top: '0px' },
					'100%': { top: '-400px' },
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
