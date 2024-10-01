/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				scroll: "scroll 15s linear infinite", // Add custom animation for scrolling
			},
			keyframes: {
				scroll: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(-100%)" },
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" },
				},
			},
			colors: {
				card: "#24292B",
				secondary: "#424E51",
				primary: "#245866",
				banner: "#FAFAFA",
				"custom-dark": "#202223",
				"custom-light": "#2A383B",
			},

			fontFamily: {
				primary: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [require("daisyui")],
};
