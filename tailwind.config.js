module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1.5rem",
				lg: "4rem",
				sm: "2rem",
				xl: "5rem",
			},
		},
		extend: {
			colors: {
				"ulesson-gray": "#E5E5E5",
				"ulesson-deep-orange": "#EA7052",
				"ulesson-green": "#4DA47E",
				"ulesson-blue": "#7B7FDA",
				"ulesson-navbg": "#313848",
				"ulesson-orange": "#F9AD6D",
			},
		},
	},
	plugins: [],
};
