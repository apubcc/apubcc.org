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

function DesktopContent() {
  return (
    <div className="hidden bg-[url('/Group12.png')] bg-[length:90%_70%] bg-center bg-no-repeat py-10 desktop:block">
      <div className="mx-auto grid grid-cols-2 items-center gap-32">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-[#ECD164]">Vision</h2>
          <p className="text-lg leading-relaxed text-gray-400 transition duration-300 ease-in-out hover:text-white">
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
          <h2 className="mb-4 text-end text-3xl font-bold text-[#EB6701]">
            Mission
          </h2>
          <p className="text-end text-lg leading-relaxed text-gray-400 transition duration-300 ease-in-out hover:text-white">
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
  );
}

function MobileContent() {
  return (
    <main className="block space-y-9 desktop:hidden">
      <section className="space-y-3">
        <h2 className="text-[1.375rem] font-black text-[#ECD164]">Vision</h2>
        <div className="relative">
          <div className="absolute -left-[10px] top-0 h-[24px] w-[3px] rounded-[2px] bg-[#FBD954]" />
          <img
            src="/vision.png"
            alt=""
            className="vision ml-2 h-[7.5625rem] w-[11.9375rem] rounded-2xl desktop:h-[20.1875rem] desktop:w-[30.3125rem]"
          />
          <p className="tablet-desktop:text-xl text-justify text-[0.75rem] font-semibold text-white">
            To be the leading student hub in Malaysia that gather Web3 talents
            and empower students to contribute their unique skills sets and
            creativity to the growth of the blockchain ecosystem locally and
            globally. A progressive platform where students ideas are exchanged,
            visions are shared and projects are supported and nurtured by
            various means.
          </p>
        </div>
      </section>

      <section className="relative space-y-3">
        <div className="absolute left-[17px] top-0 flex items-center gap-[11px]">
          <div className="h-[18px] w-[18px] rounded-[3px] border border-[#F6AC37]" />
          <div className="h-[11px] w-[11px] rounded-[3px] border border-[#F6AC37]" />
        </div>

        <h2 className="text-right text-[1.375rem] font-black text-[#EB6701]">
          Mission
        </h2>

        <div className="relative">
          <img
            src="/mission.png"
            alt=""
            className="mission mr-2 h-[7.5625rem] w-[11.9375rem] rounded-2xl desktop:h-[20.1875rem] desktop:w-[30.3125rem]"
          />
          <p className="tablet-desktop:text-xl text-justify text-[0.75rem] font-semibold text-white">
            To establish a community platform that offers blockchain education,
            support and mentorship that eventually leads to creating more
            potential use cases of blockchain technology. We are building a
            community with diverse course backgrounds and connecting industry
            partners with students to open more doors. We aim to implement
            practical learning, build significant projects together and educate
            members with "Gen Z style" of modules.
          </p>
        </div>
      </section>
    </main>
  );
}
