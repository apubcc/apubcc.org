import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { cn } from '@/lib/utils';
import { unstable_ViewTransition as ViewTransition } from 'react';

import './globals.css';
import Navbar from '@/components/custom/navbar';
import Footer from '@/components/custom/footer';
import Providers from './providers';

export const metadata: Metadata = {
	title: 'APUBCC',
	description: 'Asia Pacific University Blockchain & Cryptocurrency Club',
};

const nunito = Nunito({
	subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese'],
	preload: true,
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ViewTransition>
			<html lang="en">
				<body className={cn('text-white antialiased', nunito.className)}>
					<div className="bg-[#050200] min-h-screen px-4 sm:px-6 lg:px-[5rem] xl:px-[10rem] min-[1440px]:px-[15rem] 2xl:px-[20rem] 3xl:px-[25rem] pt-12 overflow-x-hidden">
						<Navbar />
						<Providers>{children}</Providers>
						<Footer />
					</div>
				</body>
			</html>
		</ViewTransition>
	);
}
