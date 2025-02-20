"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar, NavbarItem } from "../custom/navbar";
import { Button } from "../ui/button";

// Register ScrollTrigger plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  const fireballRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Set initial scale based on viewport width
    const updateFireballScale = () => {
      const vw = window.innerWidth;
      let scale = 1;
      if (vw >= 1280) {
        // xl breakpoint
        scale = 1.5;
      } else if (vw >= 1024) {
        // lg breakpoint
        scale = 1.2;
      } else if (vw >= 768) {
        // md breakpoint
        scale = 0.9;
      } else {
        scale = 0.6;
      }
      gsap.set(fireballRef.current, { scale });
    };

    // Initial scale setup
    updateFireballScale();

    // Update scale on window resize
    window.addEventListener("resize", updateFireballScale);

    // Continuous floating animation
    gsap.to(fireballRef.current, {
      y: "+=8",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Main timeline for scroll-based animations
    const achievementsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#achievements-section",
        start: "top center",
        end: "center center",
        scrub: 1.5,
        markers: true,
      },
    });

    achievementsTimeline.to(fireballRef.current, {
      scale: (index, target) => {
        const currentScale = gsap.getProperty(target, "scale") as number;
        return currentScale * 0.5;
      },
      rotation: -90,
      right: "55%",
      left: "55%",
      xPercent: -50,
      ease: "power2.inOut",
    });

    const visionMissionTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#vision-mission-section",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: true,
      },
    });

    visionMissionTimeline.to(fireballRef.current, {
      scale: (index, target) => {
        const currentScale = gsap.getProperty(target, "scale") as number;
        return currentScale * 0.6;
      },
      duration: 1,
      ease: "power2.inOut",
      x: "-30vw",
    });

    const galleryTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#gallery-section",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: true,
      },
    });

    galleryTimeline
      .to(fireballRef.current, {
        x: "-100vw",
        duration: 0.3,
      })
      .to(fireballRef.current, {
        x: "-30vw",
        y: "-20vh",
        rotation: 180,
        scale: (index, target) => {
          const currentScale = gsap.getProperty(target, "scale") as number;
          return currentScale * 0.8;
        },
        duration: 0.3,
        zIndex: -999999999,
      })
      .to(fireballRef.current, {
        x: "100vw",
        y: "50vh",
        rotation: 360,
        scale: (index, target) => {
          const currentScale = gsap.getProperty(target, "scale") as number;
          return currentScale * 0.5;
        },
        duration: 20,
        zIndex: -999999999,
        ease: "power2.inOut",
      });

    const loveGradientTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#love-gradient",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: true,
      },
    });

    loveGradientTimeline.to("#love-gradient", {
      scale: 0.9,
      duration: 1,
    });

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateFireballScale);
    };
  });

  return (
    <div className="relative flex aspect-[36/18] flex-col rounded-3xl bg-[url('/hero-mobile-bg.png')] bg-cover lg:bg-[url('/hero-desktop-bg.png')]">
      <header className="flex items-center justify-center gap-[7px] md:h-16 xl:h-20">
        <section className="w-[102px] md:w-[180px] lg:w-[200px] xl:w-[18rem]">
          <img
            src="/apubcc-horizontal.png"
            alt="apubcc horizontal logo"
            className="h-full w-full object-contain"
          />
        </section>

        <section className="flex w-full items-center justify-end gap-5 pl-14 pr-[10px]">
          <Navbar className="hidden lg:flex lg:h-[2.69rem] lg:w-[33rem] xl:h-[3.5rem] xl:w-full">
            <NavbarItem href="/events">Events</NavbarItem>
            <NavbarItem href="/resources">Resources</NavbarItem>
            <NavbarItem href="/about-us">About Us</NavbarItem>
            <NavbarItem href="/contact-us">Contact Us</NavbarItem>
          </Navbar>

          <Button className="hidden rounded-[20px] border border-[#FF2200] bg-white py-6 text-[1.3125rem] font-bold leading-normal text-black shadow-[0_0_30px_0_#FF2200] lg:flex">
            Join Us
          </Button>
        </section>
      </header>

      <main className="relative flex flex-1 items-center px-6 xl:px-[5rem]">
        <h1 className="relative z-10 w-[13.1875rem] text-xl font-extrabold tracking-[1.1px] text-black text-stroke-1 text-stroke-black md:w-[30rem] md:text-5xl lg:w-[37.75rem] lg:text-[3.4375rem] xl:w-[35rem] xl:text-[3.5rem] xl:leading-[6rem]">
          LEADING SOUTHEAST ASIA STUDENT BLOCKCHAIN CLUB
        </h1>

        {/* Fireball container to maintain space */}
        <div className="fixed right-[30rem] top-[13rem] h-[120px] w-[120px] md:h-[150px] md:w-[150px] lg:h-[180px] lg:w-[180px] xl:right-[25rem] xl:top-[rem] xl:h-[300px] xl:w-[300px]">
          <img
            ref={fireballRef}
            src="/fireball.png"
            alt="fireball image"
            className="h-full w-full origin-center transform object-contain"
          />
        </div>
      </main>
    </div>
  );
}
