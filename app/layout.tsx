import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

//? declaring local font
const sfPro = localFont({
	src: [
		{
			path: '../assets/fonts/sfProBLACKITALIC.otf',
			weight: '900',
			style: 'italic',
		},
		{
			path: '../assets/fonts/sfProBOLD.otf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../assets/fonts/sfProHEAVYITALIC.otf',
			weight: '900',
			style: 'italic',
		},
		{
			path: '../assets/fonts/sfProLIGHTITALIC.otf',
			weight: '300',
			style: 'italic',
		},
		{
			path: '../assets/fonts/sfProMEDIUM.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../assets/fonts/sfProREGULAR.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/sfProSEMIBOLDITALIC.otf',
			weight: '600',
			style: 'italic',
		},
		{
			path: '../assets/fonts/sfProTHINITALIC.otf',
			weight: '100',
			style: 'italic',
		},
		{
			path: '../assets/fonts/sfProULTRALIGHTITALIC.otf',
			weight: '200',
			style: 'italic',
		},
	],
})

//? site metadata
export const metadata: Metadata = {
	title: 'web-practice',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${sfPro.className} bg-DarkConrtastBGRD text-DarkTextStyle`}>{children}</body>
		</html>
	)
}
