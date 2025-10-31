/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		extend: {
			colors: {
				"custom-black": "#222",
				"custom-blue": "#4338a1",
				"light-blue": "#949af5",
				"custom-red": "#f73c57",
				"text-light": "#f1f1f1",
				"text-dark": "#333",
			},
			fontFamily: {
				"perfect-dark": ['"Perfect Dark (BRK)"', "sans-serif"],
				lato: ["Lato", "Arial", "sans-serif"],
			},
			animation: {
				gradient: "gradient 15s ease infinite",
			},
			keyframes: {
				gradient: {
					"0%": { "background-position": "0% 50%" },
					"50%": { "background-position": "100% 50%" },
					"100%": { "background-position": "0% 50%" },
				},
			},
			backgroundSize: {
				gradient: "400% 1100%",
			},
		},
	},
	plugins: [],
};
