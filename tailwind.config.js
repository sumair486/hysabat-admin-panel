/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#0096FF",
				secondary: "#FF6B6B",
				lightGray: "#728694",
				darkGray: "#FBFBFB",
				// Yellow accent
			},
		},
	},
	plugins: [],
};
