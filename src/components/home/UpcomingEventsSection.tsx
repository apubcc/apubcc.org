'use client';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import EventCard from './EventCard';
import { useQuery } from '@tanstack/react-query';
import { eventsOptions } from '@/lib/notion-options';

export default function UpcomingEventsSection() {
	const { data } = useQuery({
		queryKey: ['events'],
		queryFn: async () => {
			try {
				const response = await fetch(`/api/notion/events`);
				if (!response.ok) {
					throw new Error(`Failed to fetch events: ${response.status}`);
				}
				return response.json();
			} catch (error) {
				console.error('Error fetching events:', error);
				return [];
			}
		},
		staleTime: 1000 * 60 * 5, // 5 minutes
		refetchOnMount: true,
		refetchOnWindowFocus: true,
		refetchOnReconnect: true,
	});
	// check if there is upcoming events using the status property
	const upcomingEvents = (data as any)?.filter((event: any) => event.status === 'Upcoming');
	return (
		<>
			{upcomingEvents?.length ? (
				<section
					id="upcoming-events"
					className="relative container mt-[4rem] xs:mt-0 lg:mt-[10rem]"
				>
					<div className="flex flex-col gap-[1rem]">
						<div
							className="w-[6.25rem] h-[0.1875rem] rounded-full lg:w-[10rem] lg:h-[0.3rem]"
							style={{
								background: 'linear-gradient(90deg, #F9C646 0%, #F8A02A 100%)',
							}}
						/>
						<h2 className="text-[1.375rem] font-black lg:text-[2.375rem]">Upcoming Events</h2>
					</div>
					<main className="w-full lg:mt-[4rem]">
						<Carousel className="w-full">
							<CarouselContent>
								{(data as any)?.map((event: any) => (
									<CarouselItem className="basis-2/3 md:basis-[36%] lg:basis-[40%]" key={event.id}>
										<EventCard event={event} />
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
					</main>
				</section>
			) : (
				<section className="container mt-[4rem] xs:mt-0 lg:mt-[10rem]">
					<div className="flex flex-col gap-[1rem]">
						<div
							className="w-[6.25rem] h-[0.1875rem] rounded-full lg:w-[10rem] lg:h-[0.3rem]"
							style={{
								background: 'linear-gradient(90deg, #F9C646 0%, #F8A02A 100%)',
							}}
						/>
						<h2 className="text-[1.375rem] font-black lg:text-[2.375rem]"></h2>
					</div>
				</section>
			)}
		</>
	);
}
