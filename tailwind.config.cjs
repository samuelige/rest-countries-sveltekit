/** @type {import('tailwindcss').Config}*/
const theme = require("./theme");

const darMode = require("./src/store/store");
console.log(darMode)
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
