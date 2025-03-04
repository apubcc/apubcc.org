"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import ResourcesSvg from "./resources-svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const resources = [
  {
    id: 1,
    title: "Substack",
    img: "/Card1Main.png",
    icon: "/Substackicon.svg",
    link: "https://apubcc.substack.com/",
    info: "Substack is where we share insights and updates.",
  },
  {
    id: 2,
    title: "Github",
    img: "/GithubImage.svg",
    icon: "/GithubIcon.svg",
    link: "https://github.com/APUBCC",
    info: "Explore our open-source projects on GitHub.",
  },
  {
    id: 3,
    title: "Onboard",
    img: "/OnboardImage.svg",
    icon: "/OnboardIcon.svg",
    link: "https://onboard.stackup.dev/community/apubcc",
    info: "Join our community on Onboard.",
  },
  {
    id: 4,
    title: "Notion",
    img: "/NotionIcon.svg",
    icon: "/NotionIcon.svg",
    link: "https://apubcc-job-board.notion.site/APUBCC-s-Job-Board-9f2613885ed745228073eaf1c28726a1",
    info: "Check out job opportunities on our Notion page.",
  },
];

const MobileResources: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(1);
  const [infoCard, setInfoCard] = useState<number | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const handleCardClick = (cardNumber: number) => {
    setActiveCard(cardNumber);
  };

  const handleInfoClick = (cardNumber: number) => {
    setInfoCard(infoCard === cardNumber ? null : cardNumber);
  };

  useGSAP(() => {
    // Animate the active card to move up and center
    const activeIndex = resources.findIndex((card) => card.id === activeCard);

    // Reset all cards first
    cardRefs.current.forEach((card, idx) => {
      if (!card) return;

      if (idx === activeIndex) {
        // Move active card up and center
        gsap.to(card, {
          y: -300,
          x: () => {
            switch (idx) {
              case 0:
                return 50;
              case 1:
                return 0;
              case 2:
                return -50;
              case 3:
                return -100;
              default:
                return idx !== 0 ? -40 * idx : 0;
            }
          },
          scale: 0.6,
          zIndex: 100,
          duration: 0.1,
        });
      } else {
        // Reset non-active cards to original position
        gsap.to(card, {
          y: 0,
          x: idx !== 0 ? -40 * idx : 0,
          scale: 1,
          zIndex: resources.length - idx,
          duration: 0.1,
        });
      }
    });
  }, [activeCard]); // Re-run when activeCard changes

  return (
    <div className="-mb-[7rem] flex min-h-screen items-center justify-center pt-32 tablet-lg:hidden">
      <div className="relative flex w-full">
        {resources.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`relative h-[200px] w-[176px] cursor-pointer rounded-2xl transition-all duration-300 tablet-lg:h-[260px] tablet-lg:w-[200px] ${
              activeCard === card.id ? "z-50 scale-105" : "z-30"
            }`}
            onClick={() => handleCardClick(card.id)}
            style={{
              marginLeft: index !== 0 ? "-40px" : "0px",
              zIndex: activeCard === card.id ? 100 : resources.length - index,
              boxShadow: "10px 10px 3px 1px rgba(0, 0, 0, 0.3)",
              transformOrigin: "center center",
            }}
          >
            <div className="absolute inset-0">
              <ResourcesSvg fill="white" className="h-full w-full" />
            </div>

            <div className="relative z-10 h-full w-full">
              <div className="ml-4 mt-8 flex items-center">
                <Image
                  src={card.icon}
                  alt="Icon"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <div className="font-bold">{card.title}</div>
              </div>
              <div className="mt-6 flex justify-center">
                <Image
                  src={card.img}
                  alt={`${card.title} Image`}
                  width={110}
                  height={100}
                />
              </div>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <img
                  src="/ExtendIcon.svg"
                  alt="Extend"
                  className="absolute bottom-12 right-4 w-7"
                />
              </a>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleInfoClick(card.id);
                }}
              >
                <img
                  src="/InfoIcon.svg"
                  alt="Info"
                  className="absolute bottom-12 left-4 w-7"
                />
              </button>
              {infoCard === card.id && (
                <div className="absolute bottom-8 left-0 flex h-1/2 w-full flex-col items-center rounded-b-2xl bg-black p-4 transition-all duration-500 ease-in-out">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleInfoClick(card.id);
                    }}
                  >
                    <img
                      src="/InfoIcon.svg"
                      alt="Info"
                      className="absolute bottom-4 left-4 w-7"
                    />
                  </button>
                  <p className="mb-4 text-center text-white">{card.info}</p>
                  <a href={card.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/ExtendIcon.svg"
                      alt="Extend"
                      className="absolute bottom-4 right-4 w-7"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileResources;
