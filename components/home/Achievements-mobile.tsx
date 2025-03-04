"use client";

export default function AchievementsMobile() {
  return (
    <article className="relative">
      <section className="">
        <Timeline />
      </section>
    </article>
  );
}

export function Timeline() {
  // Sample timeline data - only title and description
  const timelineEvents = [
    {
      title: "30+ Events",
      description: "xxxxxxxx xxx xxxxx xxx xxxxxxx",
    },
    {
      title: "500+ Members",
      description: "xxxxxxxx xxx xxxxx xxx xxxxxxx",
    },
    {
      title: "20+ Committees",
      description: "xxxxxxxx xxx xxxxx xxx xxxxxxx",
    },
    {
      title: "20+ Partners",
      description: "xxxxxxxx xxx xxxxx xxx xxxxxxx",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl">
        <div className="relative">
          {/* Timeline events */}
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative mb-5 last:mb-0 tablet:mb-8">
              {/* Animated yellow dots with concentric circles */}
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform">
                {/* Largest circle (r=16) with 0.1 opacity - appears last and stays */}
                <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-[circle-fade-01_1.5s_ease-in-out_infinite] rounded-full bg-[#FBD954] opacity-0"></div>

                {/* Large circle (r=16) with 0.2 opacity - appears third then fades */}
                <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-[circle-fade-02_1.5s_ease-in-out_infinite] rounded-full bg-[#FBD954] opacity-0"></div>

                {/* Middle circle (r=12) with 0.5 opacity - appears second then fades */}
                <div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 animate-[circle-fade-05_1.5s_ease-in-out_infinite] rounded-full bg-[#FBD954] opacity-0"></div>

                {/* Smallest circle (r=8) with full opacity - shows immediately */}
                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FBD954] opacity-100"></div>
              </div>

              {/* Content container - alternating left and right */}
              <div className="flex items-center">
                {index % 2 === 0 ? (
                  // Left side content (even indices: 0, 2)
                  <>
                    <div className="flex w-1/2 justify-end pr-6">
                      <div className="max-w-xs text-right">
                        <h3 className="mb-2 text-xl font-bold text-white">
                          {event.title}
                        </h3>
                        <p className="text-sm text-white/80">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-1/2"></div>
                  </>
                ) : (
                  // Right side content (odd indices: 1, 3)
                  <>
                    <div className="w-1/2"></div>
                    <div className="w-1/2 pl-6">
                      <div className="max-w-xs text-left">
                        <h3 className="mb-2 text-xl font-bold text-white">
                          {event.title}
                        </h3>
                        <p className="text-sm text-white/80">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
