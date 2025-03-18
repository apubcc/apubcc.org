'use client';
import { cn } from '@/lib/utils';
import { AlignJustify, X } from 'lucide-react';
import { Link } from 'next-view-transitions';
import { useState } from 'react';
import { Button } from '../ui/button';
export default function Navbar() {
	return (
		<>
			<NavbarMobile />
		</>
	);
}

function NavbarMobile() {
	const [isOpen, setIsOpen] = useState(false);

	const onClose = () => {
		setIsOpen(false);
	};

	return (
		<>
			<div
				className="fixed w-[3.75rem] h-[2.1875rem] right-0 top-14 z-50 flex items-center justify-center lg:hidden"
				onClick={() => setIsOpen(!isOpen)}
				style={{
					borderRadius: '10px 0px 0px 10px',
					background: 'linear-gradient(90deg, #F5710C 54.73%, #FFF 146.4%)',
				}}
			>
				<AlignJustify />
			</div>

			<div
				className={cn(
					'fixed inset-0 z-[9999] min-h-svh flex-col overflow-y-auto bg-[#f5710c] text-[#000000] lg:hidden',
					isOpen ? 'flex' : 'hidden'
				)}
			>
				<div className="flex justify-end p-6">
					<button onClick={onClose} className="text-[#ffffff]">
						<X className="h-8 w-8" />
					</button>
				</div>

				<div className="flex flex-col items-center pb-12">
					<div className="flex items-center gap-4">
						<div className="relative">
							<img
								src="/apubcc-horizontal.png"
								alt="APUBCC Logo"
								className="h-[4.75rem] w-[15.625rem] object-contain"
							/>
						</div>
					</div>
				</div>

				<nav className="flex flex-col items-center gap-9 px-6 py-4">
					<Link
						href="/events"
						onClick={onClose}
						className="text-2xl font-extrabold active:text-white"
					>
						Events
					</Link>
					<Link
						href="/our-team"
						onClick={onClose}
						className="text-2xl font-extrabold active:text-white"
					>
						Our Team
					</Link>
					<Link
						href="/#faq"
						onClick={onClose}
						className="text-2xl font-extrabold active:text-white"
					>
						FAQ
					</Link>
					<Link
						href="/contact-us"
						onClick={onClose}
						className="text-2xl font-extrabold active:text-white"
					>
						Contact Us
					</Link>
				</nav>
			</div>
		</>
	);
}

export function NavbarDesktop() {
	return (
		<header className="hidden lg:flex absolute top-3 right-0 gap-3 px-3 xl:px-3 3xl:px-7 min-[1800px]:px-8">
			<nav className="rounded-[1.25rem] bg-black px-[2.125rem] py-[0.625rem] xl:px-[2rem]">
				<ul className="flex items-center gap-14 xl:gap-20 min-[1400px]:gap-28 3xl:gap-28 min-[1800px]:gap-32">
					<li>
						<Link href="/events" className="text-xl font-bold min-[1800px]:text-2xl">
							Events
						</Link>
					</li>
					<li>
						<Link href="/our-team" className="text-xl font-bold min-[1800px]:text-2xl">
							Our Team
						</Link>
					</li>
					<li>
						<Link href="/#faq" className="text-xl font-bold min-[1800px]:text-2xl">
							FAQ
						</Link>
					</li>
					<li>
						<Link href="/contact-us" className="text-xl font-bold min-[1800px]:text-2xl">
							Contact Us
						</Link>
					</li>
				</ul>
			</nav>

			<Link
				href="https://forms.office.com/Pages/ResponsePage.aspx?id=owPtDy1AM0aozYswiCIlPnXexahZ7q5IsmNJl1_ZU91UNFYyQU01Mkg4TUpBMDlGUTlTTTc1VDVaSS4u&fswReload=1&fswNavStart=1741352194164"
				target="_blank"
				rel="noopener noreferrer"
				className="px-[1rem] py-[0.625rem] text-black text-xl font-bold h-full"
				style={{
					borderRadius: '20px',
					border: '1px solid #F20',
					background: '#FFF',
					boxShadow: '0px 0px 30px 0px #F20',
				}}
			>
				Join Us
			</Link>
		</header>
	);
}

export function NavbarDesktopExcludeHome() {
	return (
		<header className="hidden lg:flex fixed top-3 right-0 left-0 gap-3 px-3 items-center z-50 w-full justify-between mx-auto lg:px-[5rem] xl:px-[10rem] min-[1440px]:px-[15rem] 2xl:px-[20rem] 3xl:px-[25rem]">
			<Link href="/" className="w-[12.5rem] h-[3.75rem]">
				<img
					src="/apubcc-horizontal.png"
					alt="APUBCC Logo"
					className="h-full w-full object-contain"
				/>
			</Link>
			<nav className="rounded-[1.25rem] bg-black px-[2.125rem] py-[0.625rem] xl:px-[3rem]">
				<ul className="flex items-center gap-14 xl:gap-16 3xl:gap-20">
					<li>
						<Link href="/events" className="text-xl font-bold">
							Events
						</Link>
					</li>
					<li>
						<Link href="/our-team" className="text-xl font-bold">
							Our Team
						</Link>
					</li>
					<li>
						<Link href="/#faq" className="text-xl font-bold">
							FAQ
						</Link>
					</li>
					<li>
						<Link href="/contact-us" className="text-xl font-bold">
							Contact Us
						</Link>
					</li>
				</ul>
			</nav>

			<Link
				href="https://forms.office.com/Pages/ResponsePage.aspx?id=owPtDy1AM0aozYswiCIlPnXexahZ7q5IsmNJl1_ZU91UNFYyQU01Mkg4TUpBMDlGUTlTTTc1VDVaSS4u&fswReload=1&fswNavStart=1741352194164"
				target="_blank"
				rel="noopener noreferrer"
				className="px-[1rem] py-[0.625rem] text-black text-xl font-bold h-full"
				style={{
					borderRadius: '20px',
					border: '1px solid #F20',
					background: '#FFF',
					boxShadow: '0px 0px 30px 0px #F20',
				}}
			>
				Join Us
			</Link>
		</header>
	);
}
