import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			screens: {
				'2sm': '320px',
			},
			colors: {
				//? bg colors
				DT_DeepBckgr: 'var(--bg-colors-DT_DeepBckgr)',
				DT_WTBack: 'var(--bg-colors-DT_WTBack)',
				DT_Text: 'var(--bg-colors-DT_Text)',
				DT_Backl: 'var(--bg-colors-DT_Backl)',
				DT_TextboxEText: 'var(--bg-colors-DT_TextboxEText)',
				DT_LPassBack: 'var(--bg-colors-DT_LPassBack)',
				DT_TextboxCont: 'var(--bg-colors-DT_TextboxCont)',
				DT_Login: 'var(--bg-colors-DT_Login)',
				DT_BacklLable: 'var(--bg-colors-DT_BacklLable)',
				DT_SearchBar: 'var(--bg-colors-DT_SearchBar)',

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
