import {Navbar, NavbarItem} from "../custom/Navbar";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="max-w-[1440px] mx-auto h-[38rem] rounded-3xl relative">
        {/* Background with mask */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#F7730E] via-[#f47f26] to-[#FDB127] rounded-3xl mask-cover" />
      
      <div className="relative z-10">
        <header className="flex gap-24">

          <section className="w-[18%] h-[15%]">
            <img src="/apubcc-horizontal.png" alt="apubcc horizontal logo" className="" />
          </section>


          <Navbar className="w-[45.1875rem] h-[3.125rem] mt-6">
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

        <main className="px-[4.6875rem] pt-[100px] relative">
          <h1 className="text-black relative z-20 text-[3.4375rem] font-extrabold w-[37.75rem] tracking-[1.1px] text-stroke-1 text-stroke-black">LEADING SOUTHEAST ASIA STUDENT BLOCKCHAIN CLUB</h1>
          <img src="/fireball.png" alt="fireball image" className="absolute z-10 top-0 left-96 xl:-top-10 xl:left-[350px] w-[668px] h-[668px]"/>
        </main> 
      </div>
    </div> 
  )
}