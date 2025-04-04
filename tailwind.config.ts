import type { Config } from "tailwindcss";

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				nero: '#252525',
				sand: '#3E4147',
				sea: '#5865F2',
				silver: '#C0C0C0',
				armor: '#5D5D5D',
				gunmetal: '#232428',
				ebony: '#313338',
			},
		},
	},
	plugins: [],
} satisfies Config
