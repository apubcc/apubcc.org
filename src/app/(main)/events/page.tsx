import { getNotionEvents } from '@/lib/notion-actions';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '../../get-query-client';
import { queryOptions } from '@tanstack/react-query';
import EventList from './event-list';
import { eventsOptions } from '@/lib/notion-options';
export default async function EventsPage() {
	const queryClient = getQueryClient();

	await queryClient.prefetchQuery(eventsOptions);
	const events = queryClient.getQueryData(eventsOptions.queryKey);
	return (
		<>
			<div className="relative bg-[url('/event-bg.png')] bg-cover bg-no-repeat -mt-20 -mx-4 sm:-mx-6 sm:px-6 lg:-mx-[5rem] lg:px-[5rem] xl:-mx-[10rem] xl:px-[10rem] min-[1440px]:-mx-[15rem] min-[1440px]:px-[15rem] 2xl:-mx-[20rem] 2xl:px-[20rem] 3xl:-mx-[25rem] 3xl:px-[25rem] px-4">
				<div className="relative flex h-[50svh] items-center justify-center">
					<h1 className="text-center text-[0.9375rem] font-bold leading-normal text-white lg:text-[2.5rem]">
						Discover Events
					</h1>
				</div>

				<main className="relative min-h-svh w-full px-4 md:px-8 lg:px-[10.5rem]">
					<div className="mx-auto max-w-6xl space-y-16 pt-20 md:space-y-24 md:pt-40 lg:space-y-[5rem] lg:pt-1">
						{!events || (events as any).length === 0 ? (
							<section className="flex flex-col items-center justify-center px-4 text-center">
								<div className="mb-8">
									<img
										src="/events-rocket.png"
										alt="Rocket Graphics"
										className="h-24 w-24 md:h-32 md:w-32"
									/>
								</div>

								<p className="mb-2 text-base font-bold text-white md:text-[1.25rem]">
									Oops! There are no events right now
								</p>
								<p className="text-base font-bold text-white md:text-[1.25rem]">
									Stay tuned for updates or check back soon!
								</p>
							</section>
						) : (
							<section className="md:px-0">
								<HydrationBoundary state={dehydrate(queryClient)}>
									<EventList />
								</HydrationBoundary>
							</section>
						)}
					</div>
				</main>
			</div>
		</>
	);
}
