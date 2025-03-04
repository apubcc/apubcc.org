"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { eventsOptions } from "../notion-options";

export default function EventList() {
  const { data } = useSuspenseQuery(eventsOptions);

  return (
    <div className="relative flex flex-col gap-6">
      {data.map((event: any, index: number) => (
        <div key={event.id} className="relative">
          {/* Timeline connector line */}
          {index !== data.length - 1 && (
            <div className="absolute left-[10px] top-[2rem] h-[calc(100%-2.5rem)] w-[2px] transform bg-[#82380B] tablet-lg:left-[calc(250px+1rem)] tablet-lg:ml-2" />
          )}
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
}

function EventCard({ event }: { event: any }) {
  return (
    <div className="flex items-start gap-4">
      {/* Date section - Left on desktop, Above card on mobile */}
      <div className="hidden w-[250px] tablet-lg:block">
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
      <div className="flex-1 tablet-lg:flex-initial desktop:w-6/12">
        {/* Mobile date display */}
        <div className="mb-4 tablet-lg:hidden">
          <p className="text-xl font-bold text-white">{event.date}</p>
          <p className="text-sm text-gray-400">Wednesday</p>
        </div>

        {/* Event card */}
        <div className="flex w-full items-center gap-3 rounded-2xl bg-gradient-to-l from-[#371D02] to-[#0D0D0D] px-2 py-[0.8125rem] tablet-lg:w-[20rem] desktop:w-full desktop:gap-[1.25rem] desktop:py-5">
          <div className="h-32 tablet-lg:h-auto">
            <img
              src={event.image}
              alt="event-poster"
              className="h-full w-auto rounded-3xl object-cover tablet-lg:h-[150px] tablet-lg:w-[150px] tablet-lg:object-contain desktop:h-[130px] desktop:w-[150px]"
              width={96}
              height={101}
            />
          </div>

          <aside className="flex flex-1 flex-col gap-2 desktop:gap-5">
            <div>
              <h1 className="text-[0.8125rem] font-bold text-white desktop:text-[1.3125rem]">
                {event.name}
              </h1>
              <h2 className="text-[0.75rem] font-bold text-white desktop:text-[1.125rem]">
                {event.date}
              </h2>
            </div>

            <button className="w-full rounded-md bg-[#82380B] py-1 text-[0.75rem] desktop:px-6 desktop:text-[16px]">
              Book Ticket
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}
