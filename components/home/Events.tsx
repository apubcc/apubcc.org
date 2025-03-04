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
  status: "Upcoming" | "Past";
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
    <div className="relative z-10">
      <div className="text-white">
        <section className="pb-[0.6875rem]">
          <hr className="h-[0.1875rem] w-[6.25rem] bg-gradient-to-r from-[#F9C646] to-[#F8A02A] desktop:w-[11.875rem]" />
          <h2 className="text-[1.375rem] font-black text-white desktop:text-[2.375rem]">
            Upcoming Events
          </h2>
        </section>

        {/* Events List */}
        <div className="flex gap-[20px]">
          <Carousel className="w-full">
            <CarouselContent>
              {events.map((event) => (
                <CarouselItem
                  key={event.id}
                  className="sm:basis-[15.1875rem] md:basis-1/2 xl:basis-[28.5714285714%] desktop:basis-[40%]"
                >
                  <EventCard event={event} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

// EventCard Component
export function EventCard({ event }: { event: Event }) {
  return (
    <div className="flex h-32 w-[15.1875rem] items-center gap-3 rounded-2xl bg-gradient-to-l from-[#371D02] to-[#0D0D0D] px-2 py-[0.8125rem] desktop:h-[11rem] desktop:w-[23rem] desktop:gap-[1.25rem] desktop:py-5">
      <div>
        <img
          src={event.image}
          alt="event-poster"
          className="desktop:h-[150px] desktop:w-[150px]"
          width={96}
          height={101}
        />
      </div>
      <aside className="flex flex-col gap-2 desktop:gap-5">
        <div>
          <h1 className="text-[0.8125rem] font-bold desktop:text-[1.3125rem]">
            {event.title}
          </h1>
          <h2 className="text-[0.75rem] font-bold desktop:text-[1.125rem]">
            {event.date}
          </h2>
        </div>

        <button className="w-full rounded-md bg-[#82380B] py-1 text-[0.75rem] desktop:px-6 desktop:text-[16px]">
          Book Ticket
        </button>
      </aside>
    </div>
  );
}
