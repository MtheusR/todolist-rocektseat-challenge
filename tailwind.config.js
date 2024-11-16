/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'blue-dark': '#1E6F9F',
				blue: '#4EA8DE',
				'purple-dark': '#5E60CE',
				purple: '#8284FA',
				gray: {
					700: '#0D0D0D',
					600: '#1A1A1A',
					500: '#262626',
					400: '#333333',
					300: '#808080',
				},
				danger: '#E25858',
			},
			fontFamily: {
				sans: ['DM Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
});
