"use client"
import { cn } from "@/lib/utils"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

// Register ScrollTrigger plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);

const achievements = [
  {
    title: 'Achievement 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    position: 'upper left',
  },
  {
    title: 'Achievement 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    position: 'bottom left',
  },
  {
    title: 'Achievement 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    position: 'upper right',
  },
  {
    title: 'Achievement 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    position: 'bottom right',
  },
]

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
      scale: 0.6,
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
    <div id="achievements" className="relative min-h-[27rem] lg:h-[36.25rem] w-full">
      <svg xmlns="http://www.w3.org/2000/svg" id="love-gradient" viewBox="-200 -200 1680 1536" fill="none" className="absolute -z-10 top-[-30rem] left-0 right-0 w-full">
        <g filter="url(#filter0_f_62_95)">
          <path d="M525.004 325.347C464.689 284.011 303.542 230.738 141.48 348.337C99.0872 390.251 88.2316 495.37 88.1029 542.69C105.509 619.865 178.271 784.604 330.068 826.152C519.814 878.087 720.836 851.247 779.817 855.879C838.799 860.511 1054.76 761.613 1169.51 598.167C1261.31 467.41 1132.03 369.102 1055.92 336.292C1055.92 336.292 856.694 290.815 789.181 350.098C721.669 409.382 584.933 358.299 525.004 325.347Z" fill="url(#paint0_linear_62_95)" fillOpacity="0.4"/>
          <path d="M525.004 325.347C464.689 284.011 303.542 230.738 141.48 348.337C99.0872 390.251 88.2316 495.37 88.1029 542.69C105.509 619.865 178.271 784.604 330.068 826.152C519.814 878.087 720.836 851.247 779.817 855.879C838.799 860.511 1054.76 761.613 1169.51 598.167C1261.31 467.41 1132.03 369.102 1055.92 336.292C1055.92 336.292 856.694 290.815 789.181 350.098C721.669 409.382 584.933 358.299 525.004 325.347Z" stroke="black" strokeWidth="1.83646"/>
        </g>
        <defs>
          <filter id="filter0_f_62_95" x="-388.284" y="-199.669" width="2065.88" height="1534.83" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="187.734" result="effect1_foregroundBlur_62_95"/>
          </filter>
          <linearGradient id="paint0_linear_62_95" x1="645.328" y1="277.513" x2="643.747" y2="858.865" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FBBF3A"/>
            <stop offset="0.57" stopColor="#F5710C"/>
          </linearGradient>
        </defs>
      </svg>

      {/* contents */}
      <DesktopContent />

      <MobileContent />
    </div>
  )
}

function DesktopContent() {
  return (
    <div className="hidden lg:block relative w-full max-w-[900px] h-full mx-auto">
      <main className="relative p-8 w-full h-full">
        {achievements.map((achievement, index) => (
          <aside key={index} className={cn("group absolute", {
            'left-[25%] top-8': achievement.position === 'upper left',
            'left-[10%] bottom-40': achievement.position === 'bottom left',
            'right-[25%] top-8': achievement.position === 'upper right',
            'right-[10%] bottom-40': achievement.position === 'bottom right'
          })}>
            <div className="relative lg:w-20 lg:h-20 cursor-pointer">
              {/* Largest circle (r=40) with 0.1 opacity - appears last and stays */}
              <div className="absolute bg-[#FBD954] group-hover:invisible opacity-0 rounded-full w-20 h-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[circle-fade-01_1.5s_ease-in-out_infinite]"></div>
              
              {/* Large circle (r=40) with 0.2 opacity - appears third then fades */}
              <div className="absolute bg-[#FBD954] group-hover:invisible opacity-0 rounded-full w-20 h-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[circle-fade-02_1.5s_ease-in-out_infinite]"></div>
              
              {/* Middle circle (r=25) with 0.5 opacity - appears second then fades */}
              <div className="absolute bg-[#FBD954] group-hover:invisible opacity-0 rounded-full w-[50px] h-[50px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[circle-fade-05_1.5s_ease-in-out_infinite]"></div>
              
              {/* Smallest circle (r=15) with full opacity - shows immediately */}
              <div className="absolute bg-[#FBD954] rounded-full w-[30px] h-[30px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 opacity-100"></div>

              {/* Achievements Texts */}
              <div className={cn("text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100", {
                '-translate-x-80 -translate-y-1/2 w-[286px] text-right': achievement.position === 'upper left' || achievement.position === 'bottom left',
                'translate-x-20 w-[286px] text-left': achievement.position === 'upper right' || achievement.position === 'bottom right'
              })}>
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
  )
}

function MobileContent() {
  return (
    <>
      {achievements.map((achievement, index) => (
        <main key={index} className={cn("flex items-center justify-center relative pt-14 pb-20 last:pb-0 lg:hidden sm:w-10/12 mx-auto")}>
          {/* Timeline dot - centered */}
          <div>
            <div className="bg-[#FBD954] rounded-full w-3 h-3" />
          </div>

          {/* Content - alternating left and right */}
          <div className={cn(
            "text-white max-[374px]:w-[120px] min-[374px]:w-[135px] absolute top-0 sm:w-[250px]",
            index % 2 === 0 ? "left-2 text-right" : "right-2 text-left"
          )}>
            <h3 className="max-[374px]:text-lg max-[374px]:whitespace-normal min-[374px]:text-xl font-black whitespace-nowrap">
              {achievement.title}
            </h3>
            <p className="text-[0.8125rem] font-semibold">
              {achievement.description}
            </p>
          </div>
        </main>
      ))}
    </>
  )
}