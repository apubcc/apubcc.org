'use client';
import Link from 'next/link';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { useState, useEffect, useMemo } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ourTeamOptions } from '@/lib/notion-options';

// SVG Component for active category background in mobile carousel
const MobileActiveCategoryBackground = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 100 33"
		fill="none"
		className="absolute inset-0 h-full w-full"
		preserveAspectRatio="none"
	>
		<rect width="100" height="33" fill="url(#paint0_linear_1181_1677)" />
		<rect opacity="0.99" x="1" y="28" width="99" height="5" rx="2.5" fill="#F5710C" />
		<defs>
			<linearGradient
				id="paint0_linear_1181_1677"
				x1="50"
				y1="-144.5"
				x2="60.2041"
				y2="81"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0.63" stopColor="#F5710C" stopOpacity="0" />
				<stop offset="1" stopColor="#5B3619" />
			</linearGradient>
		</defs>
	</svg>
);

// SVG Component for active category background in desktop sidebar
const DesktopActiveCategoryBackground = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 198 33"
		fill="none"
		className="absolute inset-0 h-full w-full"
		preserveAspectRatio="none"
	>
		<rect width="196" height="33" fill="url(#paint0_linear_1178_111)" />
		<rect x="193" width="5" height="33" rx="2.5" fill="#F5710C" />
		<defs>
			<linearGradient
				id="paint0_linear_1178_111"
				x1="0"
				y1="16.5"
				x2="196"
				y2="16.5"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0.366" stopColor="#F5710C" stopOpacity="0" />
				<stop offset="1" stopColor="#F5710C" />
			</linearGradient>
		</defs>
	</svg>
);

const categories = [
	'Presidents',
	'Marketing',
	'Community',
	'Production',
	'Event',
	'Treasurer',
	'Secretary',
	'External Relation',
];

export default function TeamContent() {
	const { data } = useSuspenseQuery(ourTeamOptions);
	const [activeCategory, setActiveCategory] = useState('Presidents');
	const [api, setApi] = useState<any>(null);

	// Function to handle category click
	const handleCategoryClick = (category: string) => {
		setActiveCategory(category);

		// Find the index of the clicked category
		const index = categories.findIndex((c) => c === category);
		if (index !== -1 && api) {
			api.scrollTo(index);
		}
	};

	// Scroll to active category when API is available
	useEffect(() => {
		if (api) {
			const index = categories.findIndex((c) => c === activeCategory);
			if (index !== -1) {
				api.scrollTo(index);
			}
		}
	}, [api, activeCategory]);

	// Filter and sort team members based on active category and number property
	const filteredMembers = useMemo(() => {
		if (!data) return [];

		let filtered;

		// For "Presidents" category, show only members with roles containing "President"
		if (activeCategory === 'Presidents') {
			filtered = (data as any).filter(
				(member: any) => member.role && member.role.toLowerCase().includes('president')
			);
		} else {
			// For other categories, filter by department
			filtered = (data as any).filter(
				(member: any) => member.department && member.department === activeCategory
			);
		}

		// Sort by the "number" property if it exists
		return filtered.sort((a: any, b: any) => {
			// If both have number property, sort by number
			if (a.number !== undefined && b.number !== undefined) {
				return a.number - b.number;
			}

			// If only one has number property, prioritize the one with number
			if (a.number !== undefined) return -1;
			if (b.number !== undefined) return 1;

			// If neither has number property, maintain original order
			return 0;
		});
	}, [data, activeCategory]);

	return (
		<div className="pt-20 text-white">
			<div className="container mx-auto px-4 py-16">
				<h1 className="mb-16 text-center text-4xl font-bold">Our Team</h1>

				{/* Mobile/Tablet Navigation (Carousel) - Hidden on desktop and above */}
				<div className="mb-8 lg:hidden">
					<Carousel
						setApi={setApi}
						opts={{
							align: 'start',
							containScroll: 'trimSnaps',
						}}
						className="w-full"
					>
						<CarouselContent className="-ml-2">
							{categories.map((category) => (
								<CarouselItem key={category} className="basis-auto pl-2">
									<button
										onClick={() => handleCategoryClick(category)}
										className={`relative whitespace-nowrap rounded-lg px-4 py-2 transition-colors ${
											activeCategory === category ? 'text-white' : 'text-white hover:bg-white/20'
										}`}
									>
										{activeCategory === category && <MobileActiveCategoryBackground />}
										<span className="relative z-10">{category}</span>
									</button>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>

				<div className="flex gap-8">
					{/* Sidebar Navigation - Visible only on desktop and above */}
					<div className="hidden w-64 flex-shrink-0 lg:block">
						<nav className="space-y-4">
							{categories.map((category) => (
								<button
									key={category}
									onClick={() => handleCategoryClick(category)}
									className={`relative block w-full rounded-lg p-3 text-left transition-colors ${
										activeCategory === category ? 'text-white' : 'text-white hover:bg-white/10'
									}`}
								>
									{activeCategory === category && <DesktopActiveCategoryBackground />}
									<span className="relative z-10">{category}</span>
								</button>
							))}
						</nav>
					</div>

					{/* Team Grid */}
					<div className="flex-1">
						{filteredMembers.length > 0 ? (
							<div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 lg:grid-cols-3">
								{filteredMembers.map((member: any) => (
									<div key={member.name} className="group rounded-xl bg-white p-4 text-black">
										<div className="mb-4 aspect-square overflow-hidden rounded-lg">
											<img
												src={member.profilePicture || '/placeholder.svg'}
												alt={member.name}
												className="object-cover"
											/>
										</div>
										<div className="flex gap-2 justify-between">
											<div className="space-y-1">
												<h3 className="text-lg font-semibold">{member.name}</h3>
												<p className="text-gray-600 w-7/12">{member.role}</p>
											</div>
											<div className="flex gap-2 flex-col">
												{member.xhandle && (
													<Link
														href={`https://x.com/${member.xhandle}`}
														target="_blank"
														className="rounded-md p-1 text-white hover:bg-black/80 bg-black w-fit h-fit"
													>
														<FaXTwitter className="h-5 w-5" color="white" />
													</Link>
												)}
												{member.linkedin && (
													<Link
														href={`https://www.linkedin.com/in/${member.linkedin}`}
														target="_blank"
														className="rounded-md p-1 text-white hover:bg-black/80 bg-black w-fit h-fit"
													>
														<FaLinkedin className="h-5 w-5" color="white" />
													</Link>
												)}
											</div>
										</div>
									</div>
								))}
							</div>
						) : (
							<div className="flex h-40 items-center justify-center">
								<p className="text-lg text-white/70">No team members found in this department</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
