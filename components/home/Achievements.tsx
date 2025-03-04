"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

const achievements = [
  {
    title: "Achievement 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    position: "upper left",
  },
  {
    title: "Achievement 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    position: "bottom left",
  },
  {
    title: "Achievement 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    position: "upper right",
  },
  {
    title: "Achievement 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    position: "bottom right",
  },
];

export default function Achievements() {
  return (
    <div
      id="achievements"
      className="lg:h-[36.25rem] relative hidden min-h-[27rem] w-full desktop:block"
    >
      <DesktopContent />
    </div>
  );
}

// Animated Yellow Dot component with text
function AnimatedYellowDot({
  position,
  title,
  description,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: {
  position: string;
  title: string;
  description: string;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  // Determine position classes based on the position prop
  const positionClasses =
    {
      "upper left": "top-[15%] left-[35%]",
      "bottom left": "bottom-[-300%] left-[25%]",
      "upper right": "top-[15%] right-[40%]",
      "bottom right": "bottom-[-300%] right-[30%]",
    }[position] || "";

  // Determine if this is a left or right positioned dot
  const isLeftSide = position.includes("left");

  // Text container positioning and alignment
  const textContainerClasses = cn(
    "absolute top-1/2 -translate-y-1/2 w-64 transition-opacity duration-300",
    isLeftSide ? "right-full mr-10 text-right" : "left-full ml-10 text-left",
    isActive ? "opacity-100" : "opacity-0",
  );

  return (
    <div className={cn("absolute z-10", positionClasses)}>
      {/* Text container */}
      <div className={textContainerClasses}>
        <h3 className="mb-2 text-3xl font-bold text-white">{title}</h3>
        <p className="text-xl text-white/80">{description}</p>
      </div>

      {/* Animated dots - hoverable */}
      <div
        className="relative cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        aria-label={`Show details for ${title}`}
      >
        {/* Largest circle (r=16) with 0.1 opacity - appears last and stays */}
        <div className="absolute left-1/2 top-1/2 h-[4rem] w-[4rem] -translate-x-1/2 -translate-y-1/2 animate-[circle-fade-01_1.5s_ease-in-out_infinite] rounded-full bg-[#FBD954] opacity-0"></div>

        {/* Large circle (r=16) with 0.2 opacity - appears third then fades */}
        <div className="absolute left-1/2 top-1/2 h-[4rem] w-[4rem] -translate-x-1/2 -translate-y-1/2 animate-[circle-fade-02_1.5s_ease-in-out_infinite] rounded-full bg-[#FBD954] opacity-0"></div>

        {/* Middle circle (r=12) with 0.5 opacity - appears second then fades */}
        <div className="absolute left-1/2 top-1/2 h-[3rem] w-[3rem] -translate-x-1/2 -translate-y-1/2 animate-[circle-fade-05_1.5s_ease-in-out_infinite] rounded-full bg-[#FBD954] opacity-0"></div>

        {/* Smallest circle (r=8) with full opacity - shows immediately */}
        <div
          className={cn(
            "absolute left-1/2 top-1/2 h-[2rem] w-[2rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FBD954] transition-all duration-300",
            isActive ? "scale-125" : "scale-100",
          )}
        ></div>
      </div>
    </div>
  );
}

function DesktopContent() {
  // State to track which achievement is active (hovered)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Handle mouse enter
  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="relative mx-auto h-full w-full">
      <main className="relative h-full w-full p-8">
        {/* Render the animated dots based on the achievements array */}
        {achievements.map((achievement, index) => (
          <AnimatedYellowDot
            key={index}
            position={achievement.position}
            title={achievement.title}
            description={achievement.description}
            isActive={activeIndex === index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </main>
    </div>
  );
}
