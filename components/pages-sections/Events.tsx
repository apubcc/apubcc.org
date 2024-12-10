import Image from "next/image";
import React from "react";

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
      <div className="mt-[90px] text-white">

        {/* Events List */}
        <div className="flex gap-[20px]">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
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
    <div className="flex font-bold mb-4  items-center gap-[20px] bg-gradient-to-r from-[#0D0D0D] to-[#371D02] p-5 rounded-md">
      <div>
        <Image src={event.image} width={150} height={150} alt="event-poster" />
      </div>
      <div>
        <h1 className="text-[21px] ">{event.title}</h1>
        <h2 className="text-[18px] ">{event.date}</h2>

        <button className="bg-[#82380B] px-6 rounded-md text-[16px] py-1  mt-[20px]">
          Book Ticket
        </button>
      </div>
    </div>
  );
}
