import Image from "next/image";
import React from "react";

// Define the type for the event object
type Event = {
  id: number;
  date: string;
  title: string;
  image: string;
};

// Main Events Component
export default function Events() {
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

  return (
    <div className="mt-[90px] relative h-screen">
      {/* Background Section */}
      <div className="relative w-[45%] h-80 pt-6 bg-top">
        {/* Background Image with Gradient Mask */}
        <div
          className="absolute inset-0 bg-[url('/vector.png')] bg-cover bg-center z-0"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 1) 50%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 1) 50%)",
            filter: "blur(6px)", // Keeps the blur subtle
            transform: "translateY(-40px)", // Moves the background upwards
          }}
        ></div>

        {/* Content Section */}
        <div className="relative z-10">
          <div className="w-32">
            <hr className="border-[#F8A02A] border-2 " />
          </div>
          <h1 className="text-[36px] mt-[20px] text-white">Upcoming Events</h1>
        </div>
      </div>

      {/* Events List */}
      <div className="absolute top-[160px] flex gap-[20px]">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
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
