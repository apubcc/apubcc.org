"use client";
import { Navbar, NavbarItem } from "@/components/custom/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";
import { useState, useRef } from "react";
import { AlignJustify } from "lucide-react";
import { MobileMenu } from "@/components/custom/mobile-navbar";
// GSAP
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function NavbarRootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useGSAP(() => {
    gsap.to(headerRef.current, {
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      scrollTrigger: {
        trigger: "body",
        start: "5% top",
        end: "5% top",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <header
      ref={headerRef}
      style={{ backdropFilter: "blur(0px)", WebkitBackdropFilter: "blur(0px)" }}
      className="fixed left-0 right-0 top-0 z-50 mx-auto flex h-fit max-w-6xl items-center justify-between rounded-b-md px-[1.3125rem] py-[1.4375rem] transition-all duration-300 desktop:h-[3.125rem] desktop:scale-90 desktop:gap-[2.25rem] desktop:pt-12 desktop-md:scale-100"
    >
      <div>
        <Link href="/">
          <img
            src="/apubcc-horizontal.png"
            alt="APUBCC Logo"
            className="w-[10rem] tablet-lg:w-[199px]"
            width={199}
          />
        </Link>
      </div>

      <Navbar className="h-[3.125rem] w-full rounded-[1.25rem] px-[2.125rem] max-desktop:hidden">
        <NavbarItem href="/events" className="desktop:text-xl">
          Events
        </NavbarItem>
        <NavbarItem href="/resources" className="desktop:text-xl">
          Resources
        </NavbarItem>
        <NavbarItem href="/our-team" className="desktop:text-xl">
          Our Team
        </NavbarItem>
        <NavbarItem href="/contact-us" className="desktop:text-xl">
          Contact Us
        </NavbarItem>
      </Navbar>

      <Button className="h-[3.125rem] rounded-[20px] border border-[#FF2200] bg-white text-[1.3125rem] font-bold leading-normal text-black shadow-[0_0_30px_0_#FF2200] max-desktop:hidden desktop:flex">
        Join Us
      </Button>

      <div
        className="fixed right-1 z-20 flex h-[2.1875rem] w-[3.75rem] cursor-pointer items-center justify-center desktop:hidden"
        style={{
          borderRadius: "10px 0px 0px 10px",
          background: "linear-gradient(90deg, #F5710C 54.73%, #FFF 146.4%)",
        }}
        onClick={() => setIsMenuOpen(true)}
      >
        <AlignJustify className="h-[1.75rem] w-[1.75rem] text-white" />
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
