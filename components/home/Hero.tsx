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
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Timeline for scroll-based animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        markers: false,
        invalidateOnRefresh: true,
      }
    });

    // Add multiple animations at different scroll points
    tl.to(fireballRef.current, {
      scale: 1,
      right: "30rem",
      top: "33%",
      duration: 1
    })
    .to(fireballRef.current, {
      scale: 1.5,
      right: "5rem",
      top: "50%",
      duration: 1
    })
    .to(fireballRef.current, {
      scale: 0.8,
      right: "40rem",
      top: "40%",
      duration: 1
    })
    .to(fireballRef.current, {
      scale: 2,
      right: "15rem",
      top: "60%",
      duration: 1
    })
    .to(fireballRef.current, {
      scale: 1,
      right: "30rem",
      top: "45%",
      duration: 1
    });

    // Add a continuous floating animation
    gsap.to(fireballRef.current, {
      duration: 2,
      y: "+=20",
      rotation: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="max-w-7xl h-[12.75rem] md:h-[22rem] lg:h-[28rem] rounded-3xl bg-[url('/hero-mobile-bg.png')] lg:bg-[url('/hero-desktop-bg.png')] bg-cover flex flex-col relative">
      <header className="flex gap-[7px] md:h-16 xl:h-20 items-center">
        <section className="w-[102px] md:w-[180px] lg:w-[200px] xl:w-[250px]">
          <img src="/apubcc-horizontal.png" alt="apubcc horizontal logo" className="w-full h-full object-contain" />
        </section>

        <section className="flex items-center gap-3 justify-end w-full pr-[10px]">
          <Navbar className="lg:w-[33rem] lg:h-[2.69rem] xl:w-[38rem] xl:h-[2.5rem] lg:flex hidden">
            <NavbarItem href="/events">Events</NavbarItem>
            <NavbarItem href="/resources">Resources</NavbarItem>
            <NavbarItem href="/about-us">About Us</NavbarItem>
            <NavbarItem href="/contact-us">Contact Us</NavbarItem>
          </Navbar>

          <Button className="lg:flex hidden bg-white text-black text-[1.3125rem] font-bold leading-normal rounded-[20px] border border-[#FF2200] shadow-[0_0_30px_0_#FF2200]">
            Join Us
          </Button>
        </section>
      </header>

      <main className="relative flex-1 flex items-center px-6">
        <h1 className="text-black text-xl md:text-5xl lg:text-[3.4375rem] font-extrabold w-[13.1875rem] md:w-[30rem] lg:w-[37.75rem] tracking-[1.1px] text-stroke-1 text-stroke-black relative z-10">
          LEADING SOUTHEAST ASIA STUDENT BLOCKCHAIN CLUB
        </h1>

        <img
          ref={fireballRef}
          src="/fireball.png"
          alt="fireball image"
          className="fixed right-[30rem] top-32 transform z-[1]
            w-[150px] h-[150px]    /* smallest screens */
            min-[425px]:w-[200px] min-[425px]:h-[200px]    /* small screens */
            sm:w-[250px] sm:h-[250px]    /* small screens */
            md:w-[280px] md:h-[280px]    /* medium screens */
            lg:w-[350px] lg:h-[350px]    /* large screens */
            xl:w-[400px] xl:h-[400px]    /* extra large screens */
            object-contain"               /* maintains aspect ratio */
        />
      </main>
    </div>
  );
}