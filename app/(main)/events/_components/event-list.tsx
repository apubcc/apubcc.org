'use client'
import { useSuspenseQuery } from "@tanstack/react-query"
import { eventsOptions } from "../notion-options"
export default function EventList() {
  const { data } = useSuspenseQuery(eventsOptions)
  console.log(data)
  return (
    <div>
      {data.map((event:any) => (
        <EventCard key={event.id} event={event} />
      ))}

    </div>
  )
}


function EventCard({event}:{event:any}) {
  return (
    <div className="py-[0.8125rem] px-2 lg:py-5 flex items-center gap-3 lg:gap-[1.25rem] w-[15.1875rem] h-32 lg:h-[11rem] lg:w-[23rem] rounded-2xl bg-gradient-to-l from-[#371D02] to-[#0D0D0D]">
      <div>
        <img src={event.image} alt="event-poster" className=" lg:w-[150px] lg:h-[150px]" width={96} height={101}/>
      </div>

      <aside className="flex flex-col gap-2 lg:gap-5">
        <div>
          <h1 className="text-[0.8125rem] lg:text-[1.3125rem] font-bold text-white">{event.name}</h1>
          <h2 className="text-[0.75rem] lg:text-[1.125rem] font-bold text-white">{event.date}</h2>
        </div>

        <button className="text-[0.75rem] bg-[#82380B] lg:px-6 py-1 rounded-md lg:text-[16px] w-full">
          Book Ticket
        </button>
      </aside>
    </div>
  );
}