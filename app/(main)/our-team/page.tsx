import { X, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-16 text-center text-4xl font-bold">Our Team</h1>

        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-64 flex-shrink-0">
            <nav className="space-y-4">
              {categories.map((category, index) => (
                <Link
                  key={category}
                  href={`#${category.toLowerCase()}`}
                  className={`block rounded-lg p-3 transition-colors ${index === 0 ? "bg-[#f5710c]" : "hover:bg-white/10"}`}
                >
                  {category}
                </Link>
              ))}
            </nav>
          </div>

          {/* Team Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
