"use client";
import { useRef, useEffect, useState } from "react";
import Lenis from "@/components/custom/lenis";
import Achievements from "@/components/home/Achievements";
import Events from "@/components/home/Events";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import HeroMobile from "@/components/home/Hero-mobile";
import AchievementsMobile from "@/components/home/Achievements-mobile";
import VisionAndMission from "@/components/home/VisionsMissions";

// GSAP
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const fireballRef = useRef<HTMLImageElement>(null);
  const cloudRef = useRef<SVGSVGElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#achievements-section",
          start: () => {
            if (window.innerWidth <= 1024) {
              return "top 100px";
            } else {
              return "top center";
            }
          },
          end: "center center",
          scrub: 1.5,
          markers: false,
        },
      })
      .to(fireballRef.current, {
        scale: 0.6,
        ease: "power2.inOut",
        duration: 1.5,
        rotation: -90,
        y: () => {
          if (window.innerWidth >= 1024) {
            return "60vh";
          } else if (window.innerWidth >= 1400) {
            return "90vh";
          } else {
            return "";
          }
        },
        yPercent: () => {
          return window.innerWidth < 1024 ? 200 : 0;
        },
        xPercent: () => {
          return window.innerWidth >= 1400 ? -70 : -40;
        },
        opacity: 0.5,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#vision-and-mission-section",
          start: "top 100px",
          end: "top 100px",
          scrub: 1.5,
          markers: false,
        },
      })
      .to(fireballRef.current, {
        ease: "power2.inOut",
        duration: 2,
        rotation: 90,
        x: "-60vw",
        yPercent: 200,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#events-section",
          start: "top center",
          end: "bottom center",
          scrub: 1.5,
          markers: true,
        },
      })
      .to(fireballRef.current, {
        ease: "power2.inOut",
        duration: 3,
        rotation: 180,
        x: "100vw",
        y: "200vh",
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#faq",
          start: "top center",
          end: "bottom center",
          scrub: 1.5,
          markers: false,
        },
      })
      .to(fireballRef.current, {
        ease: "power2.inOut",
        duration: 2,
        rotation: 360,
        x: "20vw",
        yPercent: 800,
        scale: 1,
      });

    if (window.innerWidth >= 1024) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#events-section",
            start: "top center",
            end: "bottom center",
            scrub: 1.5,
            markers: false,
          },
        })
        .to(galleryRef.current, {
          ease: "power2.inOut",
          duration: 2,
          scale: 0.8,
          yPercent: -10,
        });
    }
  });

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#vision-and-mission-section",
          start: "top 100px",
          end: "top 100px",
          scrub: 1.5,
          markers: false,
        },
      })
      .to(cloudRef.current, {
        ease: "power2.inOut",
        duration: 2,
        scale: 0.8,
        xPercent: -50,
        yPercent: 100,
        zIndex: -100,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#events-section",
          start: "top center",
          end: "bottom center",
          scrub: 1.5,
          markers: true,
        },
      })
      .to(cloudRef.current, {
        ease: "power2.inOut",
        duration: 3,
        xPercent: 50,
        yPercent: 220,
        zIndex: -100,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#gallery-section",
          start: "top center",
          end: "center center",
          scrub: 1.5,
          markers: true,
        },
      })
      .to(cloudRef.current, {
        ease: "power2.inOut",
        duration: 3,
        xPercent: -50,
        yPercent: 300,
        zIndex: -100,
      });
  });

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [isMobile]);

  return (
    <main className="overflow-x-hidden">
      <section
        id="hero-section"
        className="relative h-[30svh] w-full px-[1rem] pt-[2rem] mobile-lg:h-[32svh] mobile-lg:px-[2rem] tablet:h-[35svh] tablet-md:px-[4rem] tablet-lg:h-[40svh] tablet-lg:px-[4rem] desktop:aspect-[1120/608] desktop:h-full desktop-md:h-[80svh] desktop-md:px-[5rem] desktop-md:pt-[5rem] desktop-xl:h-[90svh] desktop-2xl:px-[10rem]"
      >
        <HeroMobile fireballRef={fireballRef} />
      </section>

      <section
        id="achievements-section"
        className="relative z-50 mt-[2.5rem] h-[60svh] px-[1rem] tablet:h-[75svh] tablet:pt-[3rem] desktop:h-[100svh] desktop:pt-[10rem]"
      >
        <svg
          ref={cloudRef}
          viewBox="0 0 390 484"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 right-0 top-[-2rem] h-full w-full desktop-md:scale-[1.3]"
        >
          <g filter="url(#filter0_f_455_517)">
            <path
              d="M156.732 166.077C137.241 153.188 85.2161 136.647 33.0464 173.601C19.4093 186.759 16 219.677 16 234.491C21.6821 258.637 45.2959 310.148 94.2943 323.026C155.542 339.123 220.358 330.55 239.387 331.949C258.415 333.349 327.988 302.204 364.856 250.938C394.35 209.925 352.566 179.258 327.988 169.052C327.988 169.052 263.688 154.984 241.963 173.601C220.239 192.218 176.09 176.342 156.732 166.077Z"
              fill="url(#paint0_linear_455_517)"
              fillOpacity="0.5"
            />
            <path
              d="M156.732 166.077C137.241 153.188 85.2161 136.647 33.0464 173.601C19.4093 186.759 16 219.677 16 234.491C21.6821 258.637 45.2959 310.148 94.2943 323.026C155.542 339.123 220.358 330.55 239.387 331.949C258.415 333.349 327.988 302.204 364.856 250.938C394.35 209.925 352.566 179.258 327.988 169.052C327.988 169.052 263.688 154.984 241.963 173.601C220.239 192.218 176.09 176.342 156.732 166.077Z"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_455_517"
              x="-134.5"
              y="0.499756"
              width="660"
              height="483"
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
                stdDeviation="75"
                result="effect1_foregroundBlur_455_517"
              />
            </filter>
            <linearGradient
              id="paint0_linear_455_517"
              x1="195.5"
              y1="151"
              x2="195.5"
              y2="333"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FBBF3A" />
              <stop offset="0.57" stopColor="#F5710C" />
            </linearGradient>
          </defs>
        </svg>

        {isMobile ? <AchievementsMobile /> : <Achievements />}
      </section>

      <section
        id="vision-and-mission-section"
        className="mt-[3rem] h-full px-[1rem] mobile-lg:px-[2rem] tablet-md:px-[4rem] tablet-lg:px-[5rem] desktop:h-svh desktop-md:px-[5rem] desktop-2xl:px-[10rem]"
      >
        <VisionAndMission />
      </section>

      <section
        id="events-section"
        className="mt-[5rem] h-[30vh] px-[1rem] mobile-lg:px-[2rem] tablet-md:px-[4rem] tablet-lg:mt-[3rem] tablet-lg:px-[5rem] desktop:mt-[6rem] desktop:h-[45svh] desktop-2xl:px-[10rem]"
      >
        <Events />
      </section>

      <section
        id="gallery-section"
        ref={galleryRef}
        className="h-[80vh] px-[1rem] mobile:h-full mobile-lg:px-[2rem] tablet-md:px-[4rem] tablet-lg:px-[5rem] desktop-2xl:px-[10rem]"
      >
        <Gallery />
      </section>

      <section
        id="faq"
        className="mt-[5rem] h-[60svh] px-[1rem] mobile-lg:px-[2rem] tablet-md:px-[4rem] tablet-lg:px-[5rem] desktop-2xl:px-[10rem]"
      >
        <Faq />
      </section>

      <section
        id="footer-section"
        className="px-[1rem] tablet-lg:px-[5rem] desktop-2xl:px-[10rem]"
        style={{
          background:
            "linear-gradient(180deg, rgba(238, 145, 89, 0.00) 17.28%, #F16007 74.52%)",
        }}
      >
        <Footer />
      </section>
    </main>
  );
}
