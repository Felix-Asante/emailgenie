/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		colors: {
			...colors,
			blue: "#139EBC",
		},
	},
	plugins: [],
};
