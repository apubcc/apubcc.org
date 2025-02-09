import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

// Define the type for the event object
type Event = {
  id: number;
  date: string;
  title: string;
  image: string;
};

export type NotionEvent = {
  id: string;
  name: string;
  date: string;
  link: string;
  status: 'Upcoming' | 'Past';
  poster: string;
};

const events: Event[] = [
  {
    id: 1,
    date: "23-11-2024",
    title: "Web3 Masterclass",
    image: "/events.png",
  },
  {
    id: 2,
    date: "23-11-2024",
    title: "Web3 Masterclass",
    image: "/events.png",
  },
  {
    id: 3,
    date: "23-11-2024",
    title: "Web3 Masterclass",
    image: "/events.png",
  },

  {
    id: 4,
    date: "23-11-2024",
    title: "Web3 Masterclass",
    image: "/events.png",
  },
];
// Main Events Component
export default function Events() {

  return (
    <>
      <div className="text-white pb-[1.125rem] lg:pb-[4.875rem]">
        <section className="pb-[0.6875rem]">
          <hr className="bg-gradient-to-r from-[#F9C646] to-[#F8A02A] w-[6.25rem] lg:w-[11.875rem] h-[0.1875rem]"/>
          <h2 className="text-[1.375rem] lg:text-[2.375rem] font-black text-white">Upcoming Events</h2>
        </section>
        
        {/* Events List */}
        <div className="flex gap-[20px] max-w-6xl">
          <Carousel className="w-full">
            <CarouselContent>
              {events.map((event) => (
                <CarouselItem key={event.id} className="sm:basis-[15.1875rem] md:basis-1/2 lg:basis-[45%]">
                  <EventCard event={event} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className="h-auto max-h-[49.125rem] grid grid-cols-2 grid-auto-rows lg:grid-cols-4 gap-3">
        <div className="col-span-1 row-span-2 aspect-[3/5] lg:aspect-auto lg:row-span-2">
          <img src="/1.png" alt="Gallery 1" className="object-cover h-full w-full" />
        </div>
        <div className="aspect-square">
          <img src="/2.png" alt="Gallery 2" className="object-cover h-full w-full" />
        </div>
        <div className="hidden lg:block aspect-square lg:col-span-2 lg:aspect-auto">
          <img src="/3.png" alt="Gallery 3" className="object-cover h-full w-full" />
        </div>
        <div className="col-span-2 hidden lg:block aspect-[2/1] lg:aspect-auto lg:col-span-2">
          <img src="/4.png" alt="Gallery 4" className="object-cover h-full w-full" />
        </div>

        <div className="col-start-2 row-span-2 aspect-[3/5] lg:col-start-auto lg:aspect-auto lg:row-span-2">
          <img src="/5.png" alt="Gallery 5" className="object-cover h-full w-full" />
        </div>
        <div className="col-span-2 hidden lg:block aspect-[2/1] lg:aspect-auto lg:col-span-2">
          <img src="/6.png" alt="Gallery 6" className="object-cover h-full w-full" />
        </div>
        <div className="aspect-square lg:aspect-auto">
          <img src="/7.png" alt="Gallery 7" className="object-cover h-full w-full" />
        </div>
      </div>
    </>
  );
}

// EventCard Component
export function EventCard({ event }: { event: Event }) {
  return (
    <div className="py-[0.8125rem] px-2 lg:py-5 flex items-center gap-3 lg:gap-[1.25rem] w-[15.1875rem] h-32 lg:h-[11rem] lg:w-[23rem] rounded-2xl bg-gradient-to-l from-[#371D02] to-[#0D0D0D]">
      <div>
        <img src={event.image} alt="event-poster" className=" lg:w-[150px] lg:h-[150px]" width={96} height={101}/>
      </div>
      <aside className="flex flex-col gap-2 lg:gap-5">
        <div>
          <h1 className="text-[0.8125rem] lg:text-[1.3125rem] font-bold">{event.title}</h1>
          <h2 className="text-[0.75rem] lg:text-[1.125rem] font-bold">{event.date}</h2>
        </div>

        <button className="text-[0.75rem] bg-[#82380B] lg:px-6 py-1 rounded-md lg:text-[16px] w-full">
          Book Ticket
        </button>
      </aside>
    </div>
  );
}
