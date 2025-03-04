"use client";
import { AlignJustify } from "lucide-react";
import { RefObject, useState } from "react";
import { MobileMenu } from "../custom/mobile-navbar";
import { Navbar, NavbarItem } from "../custom/navbar";
import { Button } from "../ui/button";

interface HeroMobileProps {
  fireballRef?: RefObject<HTMLImageElement>;
}

export default function HeroMobile({ fireballRef }: HeroMobileProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <article className="relative h-full">
      <img
        src="/hero-bg-with-logo.png"
        alt="hero-bg"
        className="object-fit absolute z-[-10] h-full w-full"
      />
      <div
        className="fixed right-1 top-10 z-20 flex h-[2.1875rem] w-[3.75rem] cursor-pointer items-center justify-center tablet-lg:hidden"
        style={{
          borderRadius: "10px 0px 0px 10px",
          background: "linear-gradient(90deg, #F5710C 54.73%, #FFF 146.4%)",
        }}
        onClick={() => setIsMenuOpen(true)}
      >
        <AlignJustify className="h-[1.75rem] w-[1.75rem] text-white" />
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Desktop Navbar */}
      <div className="hidden justify-end gap-3 px-2 pt-3 tablet-lg:flex desktop:gap-5 desktop:pt-6 desktop-lg:px-6 desktop-lg:pt-10 desktop-3xl:gap-6">
        <Navbar className="h-8 gap-5 rounded-lg px-3 desktop:h-14 desktop:gap-10 desktop:rounded-2xl desktop:px-4 desktop-lg:h-16 desktop-lg:gap-12 desktop-lg:px-6 desktop-xl:h-20 desktop-xl:rounded-3xl desktop-xl:px-8 desktop-2xl:h-20 desktop-2xl:gap-14 desktop-3xl:gap-16">
          <NavbarItem
            href="/events"
            className="text-[0.625rem] desktop:text-xl desktop-md:text-2xl desktop-lg:text-3xl desktop-xl:text-4xl"
          >
            Events
          </NavbarItem>
          <NavbarItem
            href="/resources"
            className="text-[0.625rem] desktop:text-xl desktop-md:text-2xl desktop-lg:text-3xl desktop-xl:text-4xl"
          >
            Resources
          </NavbarItem>
          <NavbarItem
            href="/our-team"
            className="text-[0.625rem] desktop:text-xl desktop-md:text-2xl desktop-lg:text-3xl desktop-xl:text-4xl"
          >
            Our Team
          </NavbarItem>
          <NavbarItem
            href="#faq"
            className="text-[0.625rem] desktop:text-xl desktop-md:text-2xl desktop-lg:text-3xl desktop-xl:text-4xl"
          >
            FAQ
          </NavbarItem>
        </Navbar>

        <Button className="flex h-8 rounded-xl border border-[#FF2200] bg-white !py-[1px] px-2 text-[0.625rem] font-bold leading-normal text-black shadow-[0_0_30px_0_#FF2200] desktop:h-14 desktop:rounded-2xl desktop:px-4 desktop:text-xl desktop-md:text-2xl desktop-lg:h-16 desktop-lg:text-3xl desktop-xl:h-20 desktop-xl:rounded-3xl desktop-xl:text-4xl desktop-2xl:h-20">
          Join Us
        </Button>
      </div>

      <section
        className="relative flex h-full items-center justify-start desktop:h-fit"
        style={{
          paddingLeft: "clamp(1rem, 6vw, 4rem)",
          paddingRight: "clamp(1rem, 6vw, 4rem)",
        }}
      >
        <h1 className="desktop relative z-10 w-[11rem] pt-[2rem] text-base font-semibold leading-normal tracking-[0.065625rem] text-black text-stroke-1 text-stroke-black mobile-lg:w-[13rem] mobile-lg:text-xl tablet:font-bold tablet-md:w-[16rem] tablet-md:text-2xl tablet-lg:w-[19rem] tablet-lg:text-3xl desktop:w-[40rem] desktop:pt-[7rem] desktop:text-6xl desktop-md:leading-[1.3] desktop-2xl:w-[49rem] desktop-2xl:px-10 desktop-2xl:text-7xl desktop-2xl:leading-[1.3]">
          LEADING SOUTHEAST ASIA STUDENT BLOCKCHAIN CLUB
        </h1>
        <img
          ref={fireballRef}
          src="/fireball.png"
          alt="fireball"
          className="desktop-2xl:top- absolute right-5 top-10 h-[10rem] w-[10rem] mobile-lg:h-[11rem] mobile-lg:w-[11rem] tablet:h-[13rem] tablet:w-[13rem] tablet-md:right-16 tablet-lg:right-20 tablet-lg:top-24 tablet-lg:h-[16rem] tablet-lg:w-[16rem] desktop:top-20 desktop:h-[28rem] desktop:w-[28rem] desktop-md:right-28 desktop-md:top-28 desktop-2xl:right-32 desktop-2xl:top-20 desktop-2xl:h-[36rem] desktop-2xl:w-[36rem]"
        />
      </section>
    </article>
  );
}
