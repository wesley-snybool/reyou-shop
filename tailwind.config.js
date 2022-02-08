module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: false,
	theme: {
		extend: {
			variants: {
				extend: {
				  animation: ['motion-safe'],
				}
			  },
			backgroundImage: {
				'hero': "url('/assets/images/valores/banner.svg')",
				'session-moda': "url('/assets/images/sobre/before-sus.svg')",
				'blog-header': "url('/assets/images/blog/header.svg')"
			   },
			colors: {
				body: "#5A5A5A",
				heading: "#212121",
				input: "#1D1E1F",
				black: "#000",
				white: "#fff",
				linen: "#FBF1E9",
				linenSecondary: "#ECE7E3",
				olive: "#3D9970",
				maroon: "#B03060",
				brown: "#C7844B",
				placeholder: "#707070",
				borderBottom: "#f7f7f7",
				facebook: "#4267B2",
				facebookHover: "#395fad",
				google: "#4285F4",
				googleHover: "#307bf9",
				'estampado': '#ffffff',
				'pink': '#ffa5b4',
				'violet': '#8224e3',
				'blue': '#0000ff',
				'persian_red': '#dd3333',
				gray: {
					50: "#FBFBFB",
					100: "#F1F1F1",
					150: "#F4F4F4",
					200: "#F9F9F9",
					300: "#E6E6E6",
					350: "#E9ECEF",
					400: "#999999",
					500: "#D8D8D8",
					600: "#3A3A3A",
					700: "#292929",
					800: "#707070",
					900: "rgba(235, 237, 239, 0.52)",
				},
				bru: {
					100: '#6883ba',
					200: '#c1dff0',
					500: '#0000ff'
				},
				am: {
					100: '#f4f1de',
					200: '#f2cc8f'
				},
				lar: '#e07a5f',
				more_content: '#EBEDEF',
				button_read: '#c4c4c4',
				card_read_more: '#E5E5E5',
				more_content_opacity: 'rgba(235, 237, 239, 0.52)',
				card_imprensa: 'rgba(196, 196, 196, 0.21)',
			},
			screens: {
				sm: "480px",
				lg: "1025px",
				"2xl": "1500px",
				"3xl": "1780px",
			},
			spacing: {
				"430px": "430px",
				"450px": "450px",
				"500px": "500px",
				"64vh": "64vh",
				vd: "450px"
			},
			minHeight: {
				"50px": "50px",
			},
			scale: {
				80: "0.8",
				85: "0.85",
				300: "3",
				400: "4",
			},
			animation: {
				shine: "shine 1s",
			},
			keyframes: {
				shine: {
					"100%": { left: "125%" },
				},
			},
		},
		boxShadow: {
			cart: "0 3px 6px rgba(0,0,0,0.12)",
			product: "0 6px 12px rgba(0,0,0,.08)",
			listProduct: "0 2px 4px rgba(0,0,0,.08)",
			navigation: "0 3px 6px rgba(0, 0, 0, 0.16)",
			navigationReverse: "0 -3px 6px rgba(0, 0, 0, 0.16)",
			header: "0 2px 3px rgba(0, 0, 0, 0.08)",
			brands_search: "2px 2px 3px rgba(0, 0, 0, 0.08)",
			cardMoreContent: "0 2px 30px rgba(0, 0, 0, 0.2)",
			subMenu: "1px 2px 3px rgba(0, 0, 0, 0.08)",
			bottomNavigation: "0 -2px 3px rgba(0, 0, 0, 0.06)",
			cookies: "0 -2px 3px rgba(0, 0, 0, 0.04)",
			searchs: "3px 3px 3px 3px rgba(0, 0, 0, 0.04)",
		},
		fontFamily: {
			body: ["'Comfortaa'"],
		},
		fontWeight: {
			hairline: 100,
			thin: 200,
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extrabold: 800,
			black: 900,
		},
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "class",
		}),
		require("tailwindcss-rtl"),
	],
};
