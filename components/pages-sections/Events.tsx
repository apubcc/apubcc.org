import Image from "next/image";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

// Define the type for the event object
type Event = {
  id: number;
  date: string;
  title: string;
  image: string;
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
      <div className="mt-[90px] text-white pb-[4.875rem]">
        <section className="pb-10">
          <hr className="bg-gradient-to-r from-[#F9C646] to-[#F8A02A] w-[11.875rem] h-[0.1875rem]"/>
          <h2 className="text-[2.375rem] font-black text-white">Upcoming Events</h2>
        </section>
        {/* Events List */}
        <div className="flex gap-[20px] max-w-[1440px]">
          <Carousel className="w-full">
            <CarouselContent>
              {events.map((event) => (
                <CarouselItem key={event.id} className="md:basis-1/2 lg:basis-1/3">
                  <EventCard event={event} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

      </div>

      <div className="h-[49.125rem] grid grid-cols-4 grid-rows-3 gap-3">
        <div className="row-span-2">
          <img src="/1.png" alt="Gallery 1" className="object-cover h-full w-full" />
        </div>
        <div>
          <img src="/2.png" alt="Gallery 2" className="object-cover h-full w-full" />
        </div>
        <div className="col-span-2">
          <img src="/3.png" alt="Gallery 3" className="object-cover h-full w-full" />
        </div>
        <div className="col-span-2">
          <img src="/4.png" alt="Gallery 4" className="object-cover h-full w-full" />
        </div>
        <div className="row-span-2">
          <img src="/5.png" alt="Gallery 5" className="object-cover h-full w-full" />
        </div>
        <div className="col-span-2">
          <img src="/6.png" alt="Gallery 6" className="object-cover h-full w-full" />
        </div>
        <div>
          <img src="/7.png" alt="Gallery 7" className="object-cover h-full w-full" />
        </div>
      </div>
    </>
  );
}

// EventCard Component
function EventCard({ event }: { event: Event }) {
  return (
    <div className="py-5 px-3 flex justify-between items-center gap-[1.25rem] w-[23.75rem] rounded-2xl bg-gradient-to-l from-[#371D02] to-[#0D0D0D]">
      <div>
        <img src={event.image} alt="event-poster" className="w-[150px] h-[150px]" />
      </div>
      <div>
        <h1 className="text-[1.3125rem] font-bold">{event.title}</h1>
        <h2 className="text-[1.125rem] font-bold">{event.date}</h2>

        <button className="bg-[#82380B] px-6 rounded-md text-[16px] py-1 w-full mt-[20px]">
          Book Ticket
        </button>
      </div>
    </div>
  );
}
