/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				navy: {
					DEFAULT: "#00072c",
					50: "#ebeef5",
					100: "#d8dfeb",
					200: "#b0bdd6",
					300: "#7a8db5",
					400: "#3d5580",
					500: "#00072c",
					600: "#000624",
					700: "#00051c",
					800: "#000315",
					900: "#00020e",
				},
				"brand-blue": {
					DEFAULT: "#004f9c",
					50: "#e8f1fb",
					100: "#cce0f5",
					200: "#99c1eb",
					300: "#66a2e0",
					400: "#3383d6",
					500: "#004f9c",
					600: "#004080",
					700: "#003165",
					800: "#00234a",
					900: "#001530",
				},
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
			borderRadius: {
				neu: "32px",
				"neu-sm": "16px",
				"neu-xs": "12px",
			},
			boxShadow: {
				neu: "9px 9px 16px rgb(150 160 185 / 0.6), -9px -9px 16px rgba(255, 255, 255, 0.55)",
				"neu-hover":
					"12px 12px 20px rgb(150 160 185 / 0.7), -12px -12px 20px rgba(255, 255, 255, 0.65)",
				"neu-sm":
					"5px 5px 10px rgb(150 160 185 / 0.6), -5px -5px 10px rgba(255, 255, 255, 0.55)",
				"neu-inset":
					"inset 6px 6px 10px rgb(150 160 185 / 0.6), inset -6px -6px 10px rgba(255, 255, 255, 0.55)",
				"neu-inset-deep":
					"inset 10px 10px 20px rgb(150 160 185 / 0.7), inset -10px -10px 20px rgba(255, 255, 255, 0.65)",
				"neu-inset-sm":
					"inset 3px 3px 6px rgb(150 160 185 / 0.6), inset -3px -3px 6px rgba(255, 255, 255, 0.55)",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-10px)" },
				},
			},
			animation: {
				float: "float 3s ease-in-out infinite",
			},
			screens: {
				mobile: { max: "640px" },
				tablet: { min: "641px", max: "1023px" },
				laptop: { min: "1024px" },
				Xlaptop: { min: "1440px" },
			},
		},
	},
	daisyui: {
		styled: true,
		themes: ["light"],
		base: false,
		utils: true,
		logs: true,
	},
	plugins: [require("daisyui")],
};
