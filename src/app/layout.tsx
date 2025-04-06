import { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local"
import { ThemeProvider } from '@/context/ThemeContext'

const sfPro = localFont({
	src: [
		{
			path: '../assets/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-Light.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../assets/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-Medium.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../assets/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-Semibold.otf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../assets/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-Heavy.otf',
			weight: '800',
			style: 'normal',
		},
	],
})

//? title that will be displayed on page label
export const metadata: Metadata = {
  title: "Organizer",
  //description: "Your slogan here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

	
  return (
    <html lang="en">
      <body className={`${sfPro.className} text-white font-medium`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
