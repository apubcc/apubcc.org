import Image from "next/image";
import React from "react";

export default function VisionAndMission() {
  return (
    <>
      <DesktopContent />
      <MobileContent />
    </>
  );
}


function DesktopContent(){
  return (
    <div className="py-10 bg-[url('/Group12.png')] bg-[length:90%_70%] bg-center bg-no-repeat hidden lg:block">
      <div className="mx-auto grid grid-cols-2 gap-32 items-center">
        <div>
          <h2 className="text-[#ECD164] text-3xl font-bold mb-4">Vision</h2>
          <p className="text-gray-400 hover:text-white text-lg leading-relaxed transition duration-300 ease-in-out">
            To be the leading student hub in Malaysia that gathers Web3 talents
            and empowers students to contribute their unique skill sets and
            creativity to the growth of the blockchain ecosystem locally and
            globally. A progressive platform where students' ideas are
            exchanged, visions are shared, and projects are supported and
            nurtured by various means.
          </p>
        </div>
        <div className="relative flex justify-end">
          <Image
            src="/group1.png"
            alt="Vision Image"
            width={485}
            height={323}
            className="rounded-lg"
          />
        </div>

        <div className="relative">
          <Image
            src="/group1.png"
            alt="Mission Image"
            width={485}
            height={323}
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-[#EB6701] text-3xl font-bold mb-4 text-end">
            Mission
          </h2>
          <p className="text-gray-400 hover:text-white text-lg leading-relaxed text-end transition duration-300 ease-in-out">
            To establish a community platform that offers blockchain education,
            support, and mentorship that eventually leads to creating more
            potential use cases of blockchain technology. We are building a
            community with diverse course backgrounds and connecting industry
            partners with students to open more doors. We aim to implement
            practical learning, build significant projects together, and educate
            members with Gen Z-style modules.
          </p>
        </div>
      </div>
    </div>
  )
}


function MobileContent(){
  return (
    <main className="space-y-9 block lg:hidden">
        <section className="space-y-3">
          <h2 className="text-[#ECD164] text-[1.375rem] font-black">Vision</h2>
          <div className="relative">
            <div className="w-[3px] h-[24px] rounded-[2px] bg-[#FBD954] absolute top-0 -left-[10px]"  />
            <img src="/vision.png" alt="" className="w-[11.9375rem] h-[7.5625rem] lg:w-[30.3125rem] lg:h-[20.1875rem] rounded-2xl ml-2 vision"/>
            <p className="text-justify text-white text-[0.75rem] font-semibold">To be the leading student hub in Malaysia that gather Web3 talents and empower students to contribute their unique skills sets and creativity to the growth of the blockchain ecosystem locally and globally. A progressive platform where students ideas are exchanged, visions are shared and projects are supported and nurtured by various means.</p>
          </div>
        </section>
        
        <section className="space-y-3 relative">

          <div className="flex items-center gap-[11px] absolute top-0 left-[17px]">
            <div className="w-[18px] h-[18px] rounded-[3px] border border-[#F6AC37]"/>
            <div className="w-[11px] h-[11px] rounded-[3px] border border-[#F6AC37]"/>
          </div>

          <h2 className="text-[#EB6701] text-[1.375rem] font-black text-right">Mission</h2>

          <div className="relative">
            <img src="/mission.png" alt="" className="w-[11.9375rem] h-[7.5625rem] lg:w-[30.3125rem] lg:h-[20.1875rem] rounded-2xl mr-2 mission"/>
            <p className="text-justify text-white text-[0.75rem] font-semibold">To establish a community platform that offers blockchain education, support and mentorship that eventually leads to creating more potential use cases of blockchain technology. We are building a community with diverse course backgrounds and connecting industry partners with students to open more doors. We aim to implement practical learning, build significant projects together and educate members with "Gen Z style" of modules.</p>
          </div>
        </section>
      </main>
  )
}