"use client";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);

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
  useGSAP(() => {
    const loveGradientTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#vision-mission-section",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
        markers: true,
      },
    });

    loveGradientTimeline.to("#love-gradient", {
      x: "50vw",
      y: "100vh",
      scale: "0.6",
      duration: 1,
      ease: "power2.inOut",
    });

    const eventsLoveGradientTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#events-section",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
        markers: true,
      },
    });

    eventsLoveGradientTimeline.to("#love-gradient", {
      y: "250vh",
      duration: 1,
      ease: "power2.inOut",
    });
  });

  return (
    <div
      id="achievements"
      className="relative min-h-[27rem] w-full overflow-hidden lg:h-[36.25rem] xl:overflow-visible"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="love-gradient"
        viewBox="-200 -200 1680 1536"
        fill="none"
        className="absolute left-1/2 top-10 -z-10 w-full -translate-x-1/2 scale-[1.6] transform sm:scale-100 xl:-top-[26rem] xl:left-0 xl:right-0 xl:translate-x-0"
      >
        <g filter="url(#filter0_f_62_95)">
          <path
            d="M525.004 325.347C464.689 284.011 303.542 230.738 141.48 348.337C99.0872 390.251 88.2316 495.37 88.1029 542.69C105.509 619.865 178.271 784.604 330.068 826.152C519.814 878.087 720.836 851.247 779.817 855.879C838.799 860.511 1054.76 761.613 1169.51 598.167C1261.31 467.41 1132.03 369.102 1055.92 336.292C1055.92 336.292 856.694 290.815 789.181 350.098C721.669 409.382 584.933 358.299 525.004 325.347Z"
            fill="url(#paint0_linear_62_95)"
            fillOpacity="0.4"
          />
          <path
            d="M525.004 325.347C464.689 284.011 303.542 230.738 141.48 348.337C99.0872 390.251 88.2316 495.37 88.1029 542.69C105.509 619.865 178.271 784.604 330.068 826.152C519.814 878.087 720.836 851.247 779.817 855.879C838.799 860.511 1054.76 761.613 1169.51 598.167C1261.31 467.41 1132.03 369.102 1055.92 336.292C1055.92 336.292 856.694 290.815 789.181 350.098C721.669 409.382 584.933 358.299 525.004 325.347Z"
            stroke="black"
            strokeWidth="1.83646"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_62_95"
            x="-388.284"
            y="-199.669"
            width="2065.88"
            height="1534.83"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="187.734"
              result="effect1_foregroundBlur_62_95"
            />
          </filter>
          <linearGradient
            id="paint0_linear_62_95"
            x1="645.328"
            y1="277.513"
            x2="643.747"
            y2="858.865"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FBBF3A" />
            <stop offset="0.57" stopColor="#F5710C" />
          </linearGradient>
        </defs>
      </svg>

      {/* contents */}
      <DesktopContent />

      <MobileContent />
    </div>
  );
}

function DesktopContent() {
  return (
    <div className="relative mx-auto hidden h-full w-full max-w-[900px] lg:block">
      <main className="relative h-full w-full p-8">
        {achievements.map((achievement, index) => (
          <aside
            key={index}
            className={cn("group absolute", {
              "left-[25%] top-8": achievement.position === "upper left",
              "bottom-40 left-[10%]": achievement.position === "bottom left",
              "right-[25%] top-8": achievement.position === "upper right",
              "bottom-40 right-[10%]": achievement.position === "bottom right",
            })}
          >
            <div className="relative cursor-pointer lg:h-20 lg:w-20">
              {/* Largest circle (r=40) with 0.1 opacity - appears last and stays */}
              <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 animate-[circle-fade-01_1.5s_ease-in-out_infinite] rounded-full bg-[#FBD954] opacity-0 group-hover:invisible"></div>

              {/* Large circle (r=40) with 0.2 opacity - appears third then fades */}
              <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 animate-[circle-fade-02_1.5s_ease-in-out_infinite] rounded-full bg-[#FBD954] opacity-0 group-hover:invisible"></div>

              {/* Middle circle (r=25) with 0.5 opacity - appears second then fades */}
              <div className="absolute left-1/2 top-1/2 h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 animate-[circle-fade-05_1.5s_ease-in-out_infinite] rounded-full bg-[#FBD954] opacity-0 group-hover:invisible"></div>

              {/* Smallest circle (r=15) with full opacity - shows immediately */}
              <div className="absolute left-1/2 top-1/2 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FBD954] opacity-100 group-hover:opacity-0"></div>

              {/* Achievements Texts */}
              <div
                className={cn(
                  "text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100",
                  {
                    "w-[286px] -translate-x-80 -translate-y-1/2 text-right":
                      achievement.position === "upper left" ||
                      achievement.position === "bottom left",
                    "w-[286px] translate-x-20 text-left":
                      achievement.position === "upper right" ||
                      achievement.position === "bottom right",
                  },
                )}
              >
                <h3 className="text-3xl font-black">{achievement.title}</h3>
                <p className="text-[1.25rem] font-semibold">
                  {achievement.description}
                </p>
              </div>
            </div>
          </aside>
        ))}
      </main>
    </div>
  );
}

function MobileContent() {
  return (
    <>
      {achievements.map((achievement, index) => (
        <main
          key={index}
          className={cn(
            "relative mx-auto flex items-center justify-center pb-20 pt-14 last:pb-0 sm:w-10/12 lg:hidden",
          )}
        >
          {/* Timeline dot - centered */}
          <div>
            <div className="h-3 w-3 rounded-full bg-[#FBD954]" />
          </div>

          {/* Content - alternating left and right */}
          <div
            className={cn(
              "absolute top-0 text-white max-[374px]:w-[120px] min-[374px]:w-[135px] sm:w-[250px]",
              index % 2 === 0 ? "left-2 text-right" : "right-2 text-left",
            )}
          >
            <h3 className="whitespace-nowrap font-black max-[374px]:whitespace-normal max-[374px]:text-lg min-[374px]:text-xl">
              {achievement.title}
            </h3>
            <p className="text-[0.8125rem] font-semibold">
              {achievement.description}
            </p>
          </div>
        </main>
      ))}
    </>
  );
}
