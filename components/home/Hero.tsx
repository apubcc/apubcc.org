import {Navbar, NavbarItem} from "../custom/navbar";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="max-w-[1440px] mx-auto h-[12.75rem] sm:h-full lg:h-[38rem] rounded-3xl relative">

      <section className="">
        <Image src={"/hero-mobile-bg.png"} alt={"hero mobile background"} width={362} height={204} className="w-full h-full object-cover"/>
      </section>
      
      <section className="absolute z-10 top-0">
        <header className="flex gap-24">

          <section className="w-[28%] md:w-[39%] lg:w-[18%] lg:h-[15%]">
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

        <main className="pl-[1.1875rem] md:pl-[4rem] lg:pr-[7rem] pt-[1.875rem] md:pt-[6.25rem] lg:px-[4.6875rem] relative">
          <h1 className="text-black relative z-20 text-xl md:text-5xl lg:text-[3.4375rem] font-extrabold w-[13.1875rem] md:w-[30rem] lg:w-[37.75rem] tracking-[1.1px] text-stroke-1 text-stroke-black">LEADING SOUTHEAST ASIA STUDENT BLOCKCHAIN CLUB</h1>
          <img src="/fireball.png" alt="fireball image" className="absolute z-10 top-5 left-40 md:left-96 w-[9.5rem] h-[9.5rem] md:w-[20rem] md:h-[20rem] lg:w-[400px] lg:h-[400px] xl:-top-10 xl:left-[350px]"/>
        </main> 
      </section>
    </div> 
  )
}