"use client";
import Image from "next/image";
import React, { useState } from "react";
import ResourcesSvg from "./resources-svg";
import { motion, AnimatePresence } from "framer-motion";

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

// Card component to maintain consistent design
function ResourceCard({
  card,
  infoCard,
  handleInfoClick,
}: {
  card: (typeof resources)[0];
  infoCard: number | null;
  handleInfoClick: (id: number) => void;
}) {
  return (
    <div
      className="relative h-[200px] w-[176px] cursor-pointer rounded-2xl"
      style={{
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
  );
}

const MobileResources: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(1);
  const [infoCard, setInfoCard] = useState<number | null>(null);

  const handleCardClick = (cardNumber: number) => {
    setActiveCard(cardNumber);
  };

  const handleInfoClick = (cardNumber: number) => {
    setInfoCard(infoCard === cardNumber ? null : cardNumber);
  };

  // Find the active card and inactive cards
  const activeCardData = resources.find((card) => card.id === activeCard);
  const inactiveCards = resources.filter((card) => card.id !== activeCard);

  return (
    <div className="-mb-[7rem] flex min-h-screen flex-col items-center justify-center pt-32 tablet-lg:hidden">
      {/* Container for active card */}
      <div className="mb-16 w-[176px]">
        <AnimatePresence>
          {activeCardData && (
            <motion.div
              key={`active-${activeCard}`}
              layoutId={`card-${activeCard}`}
              className="w-full"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                layout: { duration: 0.3 },
              }}
              onClick={() => handleCardClick(activeCard)}
            >
              <ResourceCard
                card={activeCardData}
                infoCard={infoCard}
                handleInfoClick={handleInfoClick}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Inactive Cards */}
      <div className="flex w-full justify-center" style={{ marginLeft: "10%" }}>
        <AnimatePresence>
          {inactiveCards.map((card, index) => (
            <motion.div
              key={`inactive-${card.id}`}
              layoutId={`card-${card.id}`}
              className="cursor-pointer"
              style={{
                width: "176px",
                marginLeft: index > 0 ? "-40px" : "0",
                zIndex: inactiveCards.length - index,
              }}
              onClick={() => handleCardClick(card.id)}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                layout: { duration: 0.3 },
              }}
              whileHover={{ y: -5, zIndex: 10 }}
            >
              <ResourceCard
                card={card}
                infoCard={infoCard}
                handleInfoClick={handleInfoClick}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MobileResources;
