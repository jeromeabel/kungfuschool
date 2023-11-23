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
		},
	},
	plugins: [],
};
