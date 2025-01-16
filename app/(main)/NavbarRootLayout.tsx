import { Navbar, NavbarItem } from "@/components/custom/navbar";
import { Button } from "@/components/ui/button";

export default function NavbarRootLayout() {
  return (
      <header className="max-w-6xl mx-auto flex justify-between items-center h-[3.125rem] fixed top-0 left-0 right-0 z-50 pt-12 gap-[2.25rem]">
        <div>
          <img src="/apubcc-horizontal.png" alt="APUBCC Logo" className="" width={199} />
        </div>

        <Navbar className="w-full h-[3.125rem] rounded-[20px]">
          <NavbarItem>Events</NavbarItem>
          <NavbarItem>Resources</NavbarItem>
          <NavbarItem>About Us</NavbarItem>
          <NavbarItem>FAQ</NavbarItem>
          <NavbarItem>Contact Us</NavbarItem>
        </Navbar>

        <Button className="lg:flex hidden bg-white text-black text-[1.3125rem] font-bold leading-normal rounded-[20px] border border-[#FF2200] shadow-[0_0_30px_0_#FF2200] ">
            Join Us
          </Button>
      </header>
  );
}