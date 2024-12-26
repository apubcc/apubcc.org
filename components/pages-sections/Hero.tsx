import {Navbar, NavbarItem} from "../custom/Navbar";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="max-w-[1440px] mx-auto h-[12.75rem] lg:h-[38rem] rounded-3xl relative">
        {/* Background with mask */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#F7730E] via-[#f47f26] to-[#FDB127] rounded-3xl mask-cover" />
      
      <div className="relative z-10">
        <header className="flex gap-24">

          <section className="w-[30%] mt-1 lg:w-[18%] lg:h-[15%]">
            <img src="/apubcc-horizontal.png" alt="apubcc horizontal logo" className="w-full h-full object-contain" />
          </section>


          <Navbar className="lg:w-[45.1875rem] lg:h-[3.125rem] lg:mt-6">
            <NavbarItem>
              Events
            </NavbarItem>
            <NavbarItem>
              Resources
            </NavbarItem>
            <NavbarItem>
              About Us
            </NavbarItem>
            <NavbarItem>
              FAQ
            </NavbarItem>
            <NavbarItem>
              Contact Us
            </NavbarItem>
          </Navbar>
        </header>

        <main className="pl-[1.1875rem] pr-[7rem] pt-[1.875rem] lg:px-[4.6875rem] lg:pt-[100px] relative">
          <h1 className="text-black relative z-20 text-xl lg:text-[3.4375rem] font-extrabold w-[13.1875rem] lg:w-[37.75rem] tracking-[1.1px] text-stroke-1 text-stroke-black">LEADING SOUTHEAST ASIA STUDENT BLOCKCHAIN CLUB</h1>
          <img src="/fireball.png" alt="fireball image" className="absolute z-10 top-5 left-36 lg:left-96 w-[9.5rem] h-[9.5rem] lg:w-[668px] lg:h-[668px] xl:-top-10 xl:left-[350px]"/>
        </main> 
      </div>
    </div> 
  )
}