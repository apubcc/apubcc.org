'use client';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import EventCard from './EventCard';
import { useQuery } from '@tanstack/react-query';
import { eventsOptions } from '@/lib/notion-options';

export default function UpcomingEventsSection() {
	const { data } = useQuery(eventsOptions);
	// check if there is upcoming events using the status property
	const upcomingEvents = data?.filter((event) => event.status === 'Upcoming');
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
								{data?.map((event) => (
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
