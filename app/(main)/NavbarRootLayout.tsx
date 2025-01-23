import { Navbar, NavbarItem } from "@/components/custom/navbar";
import { Button } from "@/components/ui/button";

export default function NavbarRootLayout() {
  return (
      <header className="max-w-6xl mx-auto flex justify-between items-center lg:h-[3.125rem] fixed top-0 left-0 right-0 z-50 lg:pt-12 lg:gap-[2.25rem] h-fit px-[1.3125rem] pt-[1.4375rem]">
        <div>
          <img src="/apubcc-horizontal.png" alt="APUBCC Logo" className="w-[6.25rem] lg:w-[199px]" width={199} />
        </div>

        <Navbar className="w-full h-[3.125rem] rounded-[20px] lg:flex hidden">
          <NavbarItem href="/events">Events</NavbarItem>
          <NavbarItem href="/resources">Resources</NavbarItem>
          <NavbarItem href="/about-us">About Us</NavbarItem>
          <NavbarItem href="/contact-us">Contact Us</NavbarItem>
        </Navbar>

        <Button className="lg:flex hidden bg-white text-black text-[1.3125rem] font-bold leading-normal rounded-[20px] border border-[#FF2200] shadow-[0_0_30px_0_#FF2200] ">
            Join Us
        </Button>
      </header>
  );
}