/** @type {import('tailwindcss').Config}*/
const theme = require("./theme");
const {fontFamily, colors, backgroundColor, backgroundImage} = theme;
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily,
			colors,
			backgroundColor,
			backgroundImage,
			screens: {
			  'xl-1': '1281px',
			}
		},
	},

	plugins: []
};

module.exports = config;
