/** @type {import('tailwindcss').Config}*/
const theme = require("./theme");

const {fontFamily, colors, backgroundColor, backgroundImage, boxShadow} = theme;
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',

	theme: {
		extend: {
			fontFamily,
			colors,
			backgroundColor,
			backgroundImage,
			boxShadow,
			screens: {
			  'xl-1': '1281px',
			}
		},
	},

	plugins: []
};

module.exports = config;
