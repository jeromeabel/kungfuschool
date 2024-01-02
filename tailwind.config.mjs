/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				title: ['Shanghai', ...defaultTheme.fontFamily.serif],
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				black: '#151515',
				white: '#fdfdfd',
				gold: '#eaff00',
			},
			container: {
				center: true,
			},
			gridTemplateColumns: {
				24: 'repeat(24, minmax(0, 1fr))',
			},
			gridColumnStart: {
				13: '13',
				14: '14',
				15: '15',
				16: '16',
				17: '17',
				18: '18',
				19: '19',
				20: '20',
				21: '21',
				22: '22',
				23: '23',
				24: '24',
				25: '25',
			},
			gridColumnEnd: {
				13: '13',
				14: '14',
				15: '15',
				16: '16',
				17: '17',
				18: '18',
				19: '19',
				20: '20',
				21: '21',
				22: '22',
				23: '23',
				24: '24',
				25: '25',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
