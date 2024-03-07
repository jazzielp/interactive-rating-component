/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'custom-white': 'hsl(0, 0%, 100%)',
			'custom-light-grey': 'hsl(217, 12%, 63%)',
			'custom-medium-grey' : 'hsl(216, 12%, 54%)',
			'custom-dark-blue': 'hsl(213, 19%, 18%)',
			'custom-very-dark-blue': 'hsl(216, 12%, 8%)',
			'custom-orange': 'hsl(25, 97%, 53%)',
			'custom-gradient-1': '#232534',
			'custom-gradient-2': '#181E27'

		}
	},
	plugins: [],
}
