"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar, NavbarItem } from "../custom/navbar";
import { Button } from "../ui/button";
import { Link } from "next-view-transitions";

export default function Hero({
  fireballRef,
}: {
  fireballRef: React.RefObject<HTMLImageElement>;
}) {
  return (
    <div className="relative flex aspect-[36/18] flex-col rounded-3xl bg-[url('/hero-mobile-bg.svg')] bg-cover lg:bg-[url('/hero-desktop-bg.png')]">
      <header className="flex items-center justify-center gap-[7px] md:h-16 xl:h-20">
        <section className="w-[180px] md:w-[180px] lg:w-[200px] xl:w-[18rem]">
          <Link href="/">
            <img
              src="/apubcc-horizontal.png"
              alt="apubcc horizontal logo"
              className="h-full w-full object-contain"
            />
          </Link>
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
        <div className="fixed -right-24 h-[280px] w-[280px] md:h-[150px] md:w-[150px] lg:right-[30rem] lg:top-[13rem] lg:h-[180px] lg:w-[180px] xl:right-[25rem] xl:top-[rem] xl:h-[300px] xl:w-[300px]">
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
