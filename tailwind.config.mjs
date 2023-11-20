/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				title: ['Shanghai', ...defaultTheme.fontFamily.serif],
			},
			colors: {
				black: '#151515',
				white: '#fdfdfd',
			},
			container: {
				center: true,
			},
		},
	},
	plugins: [],
};
