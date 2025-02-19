'use client'
import Image from "next/image";
import React, { useState } from "react";

const ResourcesPage: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(1);
  const [infoCard, setInfoCard] = useState<number | null>(null);

  const handleCardClick = (cardNumber: number) => {
    setActiveCard(cardNumber);
  };


  const handleInfoClick = (cardNumber: number) => {
    setInfoCard(infoCard === cardNumber ? null : cardNumber);
  };


  return (
    <div className="flex justify-center mt-10">
      <div className="relative flex space-x-[-40px]"> 
        {[ 
          { id: 1, title: "Substack", img: "/Card1Main.png", icon: "/Substackicon.svg", link: "https://apubcc.substack.com/",  info: "Substack is where we share insights and updates."},
          { id: 2, title: "Github", img: "/GithubImage.svg", icon: "/GithubIcon.svg", link: "https://github.com/APUBCC",  info: "Explore our open-source projects on GitHub." },
          { id: 3, title: "Onboard", img: "/OnboardImage.svg", icon: "/OnboardIcon.svg", link: "https://onboard.stackup.dev/community/apubcc",  info: "Join our community on Onboard." },
          { id: 4, title: "Notion", img: "/NotionIcon.svg", icon: "/NotionIcon.svg", link: "https://apubcc-job-board.notion.site/APUBCC-s-Job-Board-9f2613885ed745228073eaf1c28726a1", info: "Check out job opportunities on our Notion page." }
        ].map((card, index) => (
          <div
            key={card.id}
            className={`relative bg-white w-52 h-64 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 cursor-pointer 
              ${activeCard === card.id ? "z-50 scale-105 translate-y-[-30px]" : "z-30 opacity-100 border-black-400 border-0 "}`} 
            onClick={() => handleCardClick(card.id)}
            style={{ marginLeft: card.id !== 1 ? "-20px" : "0px", zIndex: activeCard === card.id? 100: 10 - index }}
          >
            {activeCard !== card.id && (
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>
            )}
            <div className="absolute -top-4 left-0 w-full h- bg-white">
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-11 h-8 bg-black shadow-md" style={{ borderRadius: "100%" }}></div>
            </div>
            <div className="flex mt-8 ml-4 items-center">
              <Image src={card.icon} alt="Icon" width={24} height={24} className="mr-2" />
              <div className="font-bold">{card.title}</div>
            </div>
            <div className="flex justify-center mt-6">
              <Image src={card.img} alt={`${card.title} Image`} width={110} height={100} />
            </div>
            <a href={card.link} target="_blank" rel="noopener noreferrer">
              <img src="/ExtendIcon.svg" alt="Extend" className="w-7 absolute right-4 bottom-4" />
            </a>
            <button onClick={() => handleInfoClick(card.id)}>
              <img src="/InfoIcon.svg" alt="Info" className="w-7 absolute left-4 bottom-4" />
            </button>
            {infoCard === card.id && (
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black flex flex-col items-center rounded-t-2xl transition-all duration-500 ease-in-out p-4">
                <button onClick={() => handleInfoClick(card.id)}>
                  <img src="/InfoIcon.svg" alt="Info" className="w-7 absolute left-4 bottom-4" />
                </button>
                <p className="text-white text-center mb-4">{card.info}</p>
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  <img src="/ExtendIcon.svg" alt="Extend" className="w-7 absolute right-4 bottom-4" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;