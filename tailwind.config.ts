import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				//? bg colors
				DT_DeepBckgr: 'rgba(31, 31, 31, 1)',
				DT_WTBack: 'rgb(40, 42, 46)',
				DT_Text: 'rgba(241, 241, 241, 1)',
				DT_Backl: 'rgba(49, 51, 56, 1)',
				DT_TextboxEText: 'rgba(57, 59, 65, 1)',
				DT_LPassBack: 'rgba(37, 37, 37, 1)',
				DT_TextboxCont: "rgba(35, 36, 40, 1)",
				DT_Login: "rgba(192, 192, 192, 1)",
				DT_BacklLable: "rgba(35, 36, 40, 1)",
				DT_SearchBar: "rgba(29, 29, 29, 1)",

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
			spacing: {
				'4.5': '1.125rem',
			},
		},
	},
	plugins: [],
}
export default config
