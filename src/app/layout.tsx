import { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
