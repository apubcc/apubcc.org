'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { eventsOptions } from '@/lib/notion-options';
import { useState } from 'react';
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';

const ITEMS_PER_PAGE = 4;

export default function EventList() {
	const { data } = useSuspenseQuery(eventsOptions);
	const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
	const [currentPage, setCurrentPage] = useState(1);

	// Filter events based on the active tab and sort by date (latest first)
	const filteredEvents = (data as any)
		.filter((event: any) => {
			if (activeTab === 'upcoming') {
				return (
					event.status.toLowerCase() === 'upcoming' || event.status.toLowerCase() === 'active'
				);
			} else {
				return event.status.toLowerCase() === 'past' || event.status.toLowerCase() === 'completed';
			}
		})
		.sort((a: any, b: any) => {
			// Parse dates for comparison
			const dateA = parseEventDate(a.date);
			const dateB = parseEventDate(b.date);

			// For upcoming events, sort with nearest date first
			if (activeTab === 'upcoming') {
				return dateA.getTime() - dateB.getTime();
			}
			// For past events, sort with most recent first
			else {
				return dateB.getTime() - dateA.getTime();
			}
		});

	// Helper function to parse event dates
	function parseEventDate(dateString: string): Date {
		// Handle different date formats
		// This assumes dates are in format like "15 March 2024" or "March 15, 2024"
		try {
			return new Date(dateString);
		} catch (error) {
			// If parsing fails, return current date as fallback
			console.error('Error parsing date:', dateString);
			return new Date();
		}
	}

	// Calculate pagination
	const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const currentEvents = filteredEvents.slice(startIndex, endIndex);

	// Reset to page 1 when changing tabs
	const handleTabChange = (tab: 'upcoming' | 'past') => {
		setActiveTab(tab);
		setCurrentPage(1);
	};

	// Generate page numbers for pagination
	const getPageNumbers = () => {
		const pageNumbers = [];
		const maxPagesToShow = 5;

		if (totalPages <= maxPagesToShow) {
			// Show all pages if total pages are less than or equal to maxPagesToShow
			for (let i = 1; i <= totalPages; i++) {
				pageNumbers.push(i);
			}
		} else {
			// Always show first page
			pageNumbers.push(1);

			// Calculate start and end of middle pages
			let startPage = Math.max(2, currentPage - 1);
			let endPage = Math.min(totalPages - 1, currentPage + 1);

			// Adjust if we're at the beginning or end
			if (currentPage <= 2) {
				endPage = 3;
			} else if (currentPage >= totalPages - 1) {
				startPage = totalPages - 2;
			}

			// Add ellipsis after first page if needed
			if (startPage > 2) {
				pageNumbers.push('ellipsis1');
			}

			// Add middle pages
			for (let i = startPage; i <= endPage; i++) {
				pageNumbers.push(i);
			}

			// Add ellipsis before last page if needed
			if (endPage < totalPages - 1) {
				pageNumbers.push('ellipsis2');
			}

			// Always show last page
			pageNumbers.push(totalPages);
		}

		return pageNumbers;
	};

	return (
		<>
			<section className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start md:gap-[42px]">
				<div className="flex h-[3.3125rem] w-full items-center justify-center gap-2 rounded-[10px] bg-[#F1600759] md:w-[17.8125rem]">
					<button
						onClick={() => handleTabChange('upcoming')}
						className={`flex h-full w-full items-center justify-center rounded-[10px] text-base font-bold leading-normal text-white md:w-[8.875rem] md:text-[1.25rem] ${
							activeTab === 'upcoming' ? 'bg-[#F16007]' : ''
						}`}
					>
						Upcoming
					</button>
					<button
						onClick={() => handleTabChange('past')}
						className={`flex h-full w-full items-center justify-center rounded-[10px] text-base font-bold leading-normal text-white md:w-[8.875rem] md:text-[1.25rem] ${
							activeTab === 'past' ? 'bg-[#F16007]' : ''
						}`}
					>
						Past
					</button>
				</div>
			</section>

			{filteredEvents.length === 0 ? (
				<section className="mt-16 flex flex-col items-center justify-center px-4 text-center">
					<div className="mb-8">
						<img
							src="/events-rocket.png"
							alt="Rocket Graphics"
							className="h-24 w-24 md:h-32 md:w-32"
						/>
					</div>

					<p className="mb-2 text-base font-bold text-white md:text-[1.25rem]">
						Oops! There are no {activeTab} events right now
					</p>
					<p className="text-base font-bold text-white md:text-[1.25rem]">
						Stay tuned for updates or check back soon!
					</p>
				</section>
			) : (
				<>
					<div className="relative mt-16 flex flex-col gap-6">
						{currentEvents.map((event: any, index: number) => (
							<div key={event.id} className="relative">
								{/* Timeline connector line */}
								{index !== currentEvents.length - 1 && (
									<div className="absolute left-[10px] top-[2rem] h-[calc(100%-2.5rem)] w-[2px] transform bg-[#82380B] md:left-[calc(250px+1rem)] md:ml-2" />
								)}
								<EventCard event={event} status={event.status} />
							</div>
						))}
					</div>

					{/* Pagination */}
					{totalPages > 1 && (
						<div className="mt-12">
							<Pagination>
								<PaginationContent>
									{currentPage > 1 && (
										<PaginationItem>
											<PaginationPrevious
												href="#"
												onClick={(e) => {
													e.preventDefault();
													setCurrentPage(currentPage - 1);
												}}
											/>
										</PaginationItem>
									)}

									{getPageNumbers().map((page, index) => {
										if (page === 'ellipsis1' || page === 'ellipsis2') {
											return (
												<PaginationItem key={`ellipsis-${index}`}>
													<PaginationEllipsis />
												</PaginationItem>
											);
										}

										return (
											<PaginationItem key={`page-${page}`}>
												<PaginationLink
													href="#"
													isActive={currentPage === page}
													onClick={(e) => {
														e.preventDefault();
														setCurrentPage(page as number);
													}}
												>
													{page}
												</PaginationLink>
											</PaginationItem>
										);
									})}

									{currentPage < totalPages && (
										<PaginationItem>
											<PaginationNext
												href="#"
												onClick={(e) => {
													e.preventDefault();
													setCurrentPage(currentPage + 1);
												}}
											/>
										</PaginationItem>
									)}
								</PaginationContent>
							</Pagination>
						</div>
					)}
				</>
			)}
		</>
	);
}
function EventCard({ event, status }: { event: any; status: string }) {
	const isPastEvent = status.toLowerCase() === 'past' || status.toLowerCase() === 'completed';

	return (
		<div className="flex items-start gap-4">
			{/* Date section - Left on desktop, Above card on mobile */}
			<div className="hidden w-[250px] md:block">
				<div>
					<p className="text-xl font-bold text-white">{event.date}</p>
					<p className="text-sm text-gray-400">Wednesday</p>
				</div>
			</div>

			{/* Timeline dot */}
			<div className="flex-shrink-0">
				<div className="h-5 w-5 rounded-full border-4 border-[#371D02] bg-[#82380B]" />
			</div>

			{/* Event card section */}
			<div className="flex-1 md:flex-initial lg:w-6/12">
				{/* Mobile date display */}
				<div className="mb-4 md:hidden">
					<p className="text-xl font-bold text-white">{event.date}</p>
					<p className="text-sm text-gray-400">Wednesday</p>
				</div>

				{/* Event card */}
				<div className="flex w-full items-center gap-3 rounded-2xl bg-gradient-to-l from-[#371D02] to-[#0D0D0D] px-2 py-[0.8125rem] md:w-[20rem] lg:w-full xl:w-[120%] lg:gap-[1.25rem] lg:py-5">
					<div className="h-32 md:h-auto">
						<img
							src={event.image || '/event-placeholder.png'}
							alt={`${event.name} poster`}
							className="h-full w-auto rounded-[1.5rem] object-cover md:h-[150px] md:w-[150px] md:object-contain lg:h-[130px] lg:w-[150px]"
							width={96}
							height={101}
						/>
					</div>

					<aside className="flex flex-1 flex-col gap-2 lg:gap-5">
						<div>
							<h1 className="text-[0.8125rem] font-bold text-white lg:text-[1.3125rem]">
								{event.name}
							</h1>
							<h2 className="text-[0.75rem] font-bold text-white lg:text-[1.125rem]">
								{event.date}
							</h2>
						</div>

						{event.link && !isPastEvent ? (
							<Link
								href={event.link}
								target="_blank"
								rel="noopener noreferrer"
								className="block w-full rounded-md bg-[#82380B] py-1 text-center text-[0.75rem] lg:px-6 lg:text-[16px]"
							>
								Book Ticket
							</Link>
						) : (
							<button
								className={cn(
									'w-full rounded-md bg-[#82380B] py-1 text-[0.75rem] lg:px-6 lg:text-[16px]',
									isPastEvent && 'opacity-50 cursor-not-allowed'
								)}
								disabled={isPastEvent}
							>
								{isPastEvent ? 'Event Ended' : 'Book Ticket'}
							</button>
						)}
					</aside>
				</div>
			</div>
		</div>
	);
}
