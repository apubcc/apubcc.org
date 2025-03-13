import EventList from './event-list';

export default function EventsPage() {
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
						<section className="md:px-0">
							<EventList />
						</section>
					</div>
				</main>
			</div>
		</>
	);
}
