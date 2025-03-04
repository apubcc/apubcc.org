"use client";
import { X, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// SVG Component for active category background in mobile carousel
const MobileActiveCategoryBackground = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 100 33"
    fill="none"
    className="absolute inset-0 h-full w-full"
    preserveAspectRatio="none"
  >
    <rect width="100" height="33" fill="url(#paint0_linear_1181_1677)" />
    <rect
      opacity="0.99"
      x="1"
      y="28"
      width="99"
      height="5"
      rx="2.5"
      fill="#F5710C"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1181_1677"
        x1="50"
        y1="-144.5"
        x2="60.2041"
        y2="81"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.63" stopColor="#F5710C" stopOpacity="0" />
        <stop offset="1" stopColor="#5B3619" />
      </linearGradient>
    </defs>
  </svg>
);

// SVG Component for active category background in desktop sidebar
const DesktopActiveCategoryBackground = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 198 33"
    fill="none"
    className="absolute inset-0 h-full w-full"
    preserveAspectRatio="none"
  >
    <rect width="196" height="33" fill="url(#paint0_linear_1178_111)" />
    <rect x="193" width="5" height="33" rx="2.5" fill="#F5710C" />
    <defs>
      <linearGradient
        id="paint0_linear_1178_111"
        x1="0"
        y1="16.5"
        x2="196"
        y2="16.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.366" stopColor="#F5710C" stopOpacity="0" />
        <stop offset="1" stopColor="#F5710C" />
      </linearGradient>
    </defs>
  </svg>
);

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Tan Aik Wei",
    role: "President",
    image: "/placeholder.svg?height=280&width=280",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Teh Jun Heng",
    role: "External Vice President",
    image: "/placeholder.svg?height=280&width=280",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jun Voon Chen",
    role: "Internal Vice President",
    image: "/placeholder.svg?height=280&width=280",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
];

const categories = [
  "Presidents",
  "Marketing",
  "Community",
  "Production",
  "Event",
  "Treasurer",
  "Secretary",
  "External Relation",
];

export default function TeamContent() {
  const [activeCategory, setActiveCategory] = useState("Presidents");
  const [api, setApi] = useState<any>(null);

  // Function to handle category click
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);

    // Find the index of the clicked category
    const index = categories.findIndex((c) => c === category);
    if (index !== -1 && api) {
      api.scrollTo(index);
    }
  };

  // Scroll to active category when API is available
  useEffect(() => {
    if (api) {
      const index = categories.findIndex((c) => c === activeCategory);
      if (index !== -1) {
        api.scrollTo(index);
      }
    }
  }, [api, activeCategory]);

  return (
    <div className="mx-auto min-h-screen max-w-[70rem] bg-black pt-20 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-16 text-center text-4xl font-bold">Our Team</h1>

        {/* Mobile/Tablet Navigation (Carousel) - Hidden on desktop and above */}
        <div className="mb-8 desktop:hidden">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              containScroll: "trimSnaps",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {categories.map((category) => (
                <CarouselItem key={category} className="basis-auto pl-2">
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className={`relative whitespace-nowrap rounded-lg px-4 py-2 transition-colors ${
                      activeCategory === category
                        ? "text-white"
                        : "text-white hover:bg-white/20"
                    }`}
                  >
                    {activeCategory === category && (
                      <MobileActiveCategoryBackground />
                    )}
                    <span className="relative z-10">{category}</span>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Navigation - Visible only on desktop and above */}
          <div className="hidden w-64 flex-shrink-0 desktop:block">
            <nav className="space-y-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`relative block w-full rounded-lg p-3 text-left transition-colors ${
                    activeCategory === category
                      ? "text-white"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {activeCategory === category && (
                    <DesktopActiveCategoryBackground />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Team Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group relative rounded-xl bg-white p-4 text-black"
                >
                  <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                  <div className="absolute right-6 top-6 flex gap-2">
                    {member.socials.twitter && (
                      <Link
                        href={member.socials.twitter}
                        className="rounded-full bg-black/80 p-2 text-white hover:bg-black"
                      >
                        <X className="h-4 w-4" />
                      </Link>
                    )}
                    {member.socials.linkedin && (
                      <Link
                        href={member.socials.linkedin}
                        className="rounded-full bg-black/80 p-2 text-white hover:bg-black"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
