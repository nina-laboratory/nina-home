import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
	src: "../public/fonts/Satoshi-Regular.otf",
	variable: "--font-satoshi",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Nina Laboratory",
	description: "Created by Pedro AZ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${satoshi.variable} antialiased font-sans`}>
				{children}
			</body>
		</html>
	);
}
