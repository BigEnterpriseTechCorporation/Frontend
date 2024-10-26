import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				//? bg colors
				DarkContrastBGRD: 'rgb(37, 37, 37)',
				DarkBGRD: 'rgba(50,50,50,1)',
				DarkTextboxBGRD: 'rgb(40, 40, 40)',
				DarkTextboxBG:"rgba(29, 29, 29, 1)",
				BacklLable: 'rgb(61, 61, 61)',
				DarkTextboxExampleText: 'rgba(73, 73, 75, 1)',

				//? text colors
				DarkTextMissStyle: 'rgb(192, 192, 192)',
				DarkTextStyle: 'rgb(241, 241, 241)',

				//? highlight color
				Blue: 'rgb(0, 122, 255)',
			},
			padding: {
				'4.5': '1.125rem',
				'3.5': '0.875rem',
			},
			borderRadius: {
				xs: '0.5px',
				'2.5xl': '14px',
			},
			fontSize: {
				lg: '17px',
				sm: '13px',
				xs: '10px',
			},
			width: {
				'72.25': '18.0625rem',
			},
			height: {
				'4.5': '1.125rem',
			},
		},
	},
	plugins: [],
}
export default config
