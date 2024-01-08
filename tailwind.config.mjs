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
				padding: '2rem',
			},
			gridTemplateColumns: {
				22: 'repeat(22, minmax(0, 1fr))',
				24: 'repeat(24, minmax(0, 1fr))',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
