import { Navbar, NavbarItem } from "@/components/custom/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";

export default function NavbarRootLayout() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 mx-auto flex h-fit max-w-6xl items-center justify-between px-[1.3125rem] pt-[1.4375rem] lg:h-[3.125rem] lg:gap-[2.25rem] lg:pt-12">
      <div>
        <Link href="/">
          <img
            src="/apubcc-horizontal.png"
            alt="APUBCC Logo"
            className="w-[6.25rem] lg:w-[199px]"
            width={199}
          />
        </Link>
      </div>

      <Navbar className="hidden h-[3.125rem] w-full rounded-[20px] lg:flex">
        <NavbarItem href="/events">Events</NavbarItem>
        <NavbarItem href="/resources">Resources</NavbarItem>
        <NavbarItem href="/about-us">About Us</NavbarItem>
        <NavbarItem href="/contact-us">Contact Us</NavbarItem>
      </Navbar>

      <Button className="hidden rounded-[20px] border border-[#FF2200] bg-white text-[1.3125rem] font-bold leading-normal text-black shadow-[0_0_30px_0_#FF2200] lg:flex">
        Join Us
      </Button>
    </header>
  );
}
