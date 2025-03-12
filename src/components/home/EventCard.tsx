'use client';
import { Button } from '@/components/ui/button';

export default function EventCard({ event }: { event: any }) {
	return (
		<div
			style={{ background: 'linear-gradient(230deg, #371D02 4.1%, #0D0D0D 72.67%)' }}
			className="py-3 pl-2 flex gap-3 h-[7rem] rounded-[0.5625rem] lg:h-[10rem]"
		>
			<div>
				<img src={event.image} alt="image placeholder" className="h-full rounded-[0.375rem]" />
			</div>
			<div className="flex justify-center flex-col">
				<h3 className="text-[0.75rem] font-bold lg:text-[1rem]">{event.name}</h3>
				<p className="text-[0.625rem] font-bold lg:text-[0.8rem]">{event.date}</p>

				<Button className="w-full bg-[#82380B] text-white rounded-[0.375rem] h-[1.125rem] text-[0.5625rem] mt-[0.75rem] lg:h-[1.5rem] lg:text-[1rem]">
					Book Ticket
				</Button>
			</div>
		</div>
	);
}
