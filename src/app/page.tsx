'use client';
import { Timeline } from '@/components/custom/timeline';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

import { cn } from '@/lib/utils';
import AchievementsDesktop from '@/components/custom/achievement-desktop';
import { NavbarDesktop } from '@/components/custom/navbar';

// GSAP
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const galleryImages = [
	{
		src: '/gallery/ftc.jpeg',
		alt: 'ftc',
		rows: 2,
		gridRow: 1,
		gridColumn: 1,
	},
	{
		src: '/gallery/audi-2-rh.jpeg',
		alt: 'audi-2-rh',
		rows: 1,
		gridRow: 1,
		gridColumn: 2,
	},
	{
		src: '/gallery/audi-5.jpeg',
		alt: 'audi-5',
		rows: 1,
		gridRow: 3,
		gridColumn: 1,
	},
	{
		src: '/gallery/vani-yudi.jpeg',
		alt: 'vani-yudi',
		rows: 2,
		gridRow: 2,
		gridColumn: 2,
	},
];

type FaqItem = {
	question: string;
	answer: string;
};

const faqItems: FaqItem[] = [
	{
		question: 'What is APU Blockchain Club & Cryptocurrency Club (APUBCC)?',
		answer:
			'APU Blockchain & Cryptocurrency Club (APUBCC) is a student-run organization at Asia Pacific University (APU) that aims to spread awareness and knowledge about blockchain technology and cryptocurrency. They engage in various activities such as discussions, research, gamification, seminars, workshops, and hackathons to promote understanding and application of blockchain and cryptocurrency.',
	},
	{
		question: 'What activities does APUBCC conduct?',
		answer:
			'APUBCC conducts a range of activities to spread awareness about blockchain and cryptocurrency. This includes discord channels, discussions, research initiatives, gamification, seminars, workshops, hackathons, and possibly more.',
	},
	{
		question: 'What are the benefits of joining APUBCC?',
		answer:
			'By joining APUBCC, members can gain insights and knowledge about blockchain and cryptocurrency through various interactive activities and discussions. It provides a platform to connect with like-minded individuals and participate in events that can enhance understanding and skills in the blockchain and cryptocurrency domain.',
	},
	{
		question: "How can I stay updated with APUBCC's activities?",
		answer:
			"You can stay updated with the APUBCC's activities by following our social media accounts on Facebook, Twitter, Instagram, LinkedIn, and YouTube. You can also join our Discord server to stay updated with our activities and events.",
	},
];

export default function Home() {
	const fireballRef = useRef<HTMLImageElement>(null);
	const loveBgMobileRef = useRef<HTMLImageElement>(null);
	const galleryRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: '#achievements',
					start: 'top 200px',
					end: 'center center',
					markers: true,
					scrub: 1,
				},
			})
			.to(fireballRef.current, {
				rotate: -90,
				yPercent: () => {
					const windowWidth = window.innerWidth;
					if (windowWidth < 768) {
						return 200;
					} else if (windowWidth >= 1024 && windowWidth < 1286) {
						return 150;
					} else if (windowWidth >= 1286 && windowWidth < 1900) {
						return 170;
					} else if (windowWidth >= 1900) {
						return 150;
					}
					return 130;
				},
				xPercent: () => {
					const windowWidth = window.innerWidth;
					if (windowWidth >= 1024 && windowWidth < 1286) {
						return -50;
					} else if (windowWidth >= 1286 && windowWidth < 1900) {
						return -40;
					} else if (windowWidth >= 1900) {
						return -55;
					}
					return -30;
				},
				scale: 0.5,
				opacity: 0.7,
				duration: 2,
				ease: 'power2.inOut',
			})
			.to(fireballRef.current, {
				scrollTrigger: {
					trigger: '#vision-mission',
					start: 'top 200px',
					end: 'center center',
					markers: true,
					scrub: 1,
				},
				scale: 0.7,
				opacity: 0.7,
				yPercent: 500,
				x: '-70vw',
				duration: 2,
				ease: 'power2.inOut',
			})
			.to(fireballRef.current, {
				scrollTrigger: {
					trigger: '#upcoming-events',
					start: 'top 200px',
					end: 'bottom 200px',
					markers: true,
					scrub: 1,
				},
				scale: 0.7,
				opacity: 0.7,
				yPercent: 800,
				x: '60vw',
				duration: 2,
				ease: 'power2.inOut',
			});

		gsap
			.timeline({
				scrollTrigger: {
					trigger: '#vision-mission',
					start: 'top 200px',
					end: 'center center',
					markers: true,
					scrub: 1,
				},
			})
			.to(loveBgMobileRef.current, {
				yPercent: () => {
					const windowWidth = window.innerWidth;
					if (windowWidth >= 1420) {
						return 80;
					}
					return 150;
				},
				xPercent: -50,
				scale: () => {
					const windowWidth = window.innerWidth;
					if (windowWidth < 768) {
						return 1.1;
					}
					return 0.7;
				},
				duration: 2,
				ease: 'power2.inOut',
			})
			.to(loveBgMobileRef.current, {
				scrollTrigger: {
					trigger: '#upcoming-events',
					start: 'top 200px',
					end: 'bottom center',
					markers: true,
					scrub: 1,
				},
				yPercent: () => {
					const windowWidth = window.innerWidth;
					if (windowWidth >= 1420) {
						return 150;
					}
					return 330;
				},
				duration: 2,
				ease: 'power2.inOut',
			})
			.to(loveBgMobileRef.current, {
				scrollTrigger: {
					trigger: '#faq',
					start: 'top 200px',
					end: 'center center',
					markers: true,
					scrub: 1,
				},
				yPercent: () => {
					const windowWidth = window.innerWidth;
					if (windowWidth < 768) {
						return 530;
					} else if (windowWidth >= 1420) {
						return 390;
					}
					return 330;
				},
				zIndex: -100,
				duration: 2,
				ease: 'power2.inOut',
			});
	});

	return (
		<>
			{/* hero section with navbars and logo */}
			<section className="relative container">
				<img
					src="/apubcc-horizontal.png"
					alt="logo image"
					className="absolute top-0 left-0 h-[2rem] xxs:h-[2.3rem] xs:h-[2.9rem] lg:h-[3.5rem] min-[1420px]:h-[4rem] 3xl:h-[4.5rem]"
				/>
				<img
					src="/hero-bg-mobile.svg"
					alt="background image"
					className="h-full w-full block md:hidden"
				/>
				<NavbarDesktop />
				<img src="/hero-bg.svg" alt="background image" className="h-full w-full hidden md:block" />

				<main className="absolute top-6 sm:top-10 flex items-center px-5 w-full gap-10 md:px-10 lg:top-20 lg:pl-20 3xl:pl-24 xl:top-24">
					<p className="w-[15rem] xs:w-[17rem] xs:text-[1.6rem] sm:text-[2rem] md:text-[2.15rem] sm:w-[23rem] text-black stroke-black stroke-[1.5px] text-[1.1rem] font-extrabold tracking-[1.05px] -mr-32 z-[1] lg:text-[2.8rem] lg:w-[28rem] min-[1420px]:text-[3rem] min-[1420px]:w-[30rem] 3xl:text-[3.5rem] 3xl:w-[35rem]">
						LEADING SOUTHEAST ASIA STUDENT BLOCKCHAIN CLUB
					</p>
					<img
						ref={fireballRef}
						src="/fireball.png"
						alt="fireball image"
						className="h-[12rem] xs:h-[16rem] sm:h-[20rem] md:h-[24rem] min-[1420px]:h-[28rem] 3xl:h-[28rem]"
					/>
				</main>
			</section>

			{/* Achievements section */}
			<section
				id="achievements"
				className="relative container mt-[4rem] xs:mt-[1rem] sm:mt-0 sm:w-full"
			>
				{/* <img
					ref={loveBgMobileRef}
					src="/love-bg.svg"
					alt="love background"
					className="h-full w-full block lg:hidden"
				/> */}
				<img
					ref={loveBgMobileRef}
					src="/love-bg-desktop.svg"
					alt="love background"
					className="h-full w-full scale-110 z-[-1] pointer-events-none"
				/>

				<main className="absolute top-0 xs:top-20 sm:top-36 md:top-24 left-0 right-0 lg:top-60">
					<Timeline />
					<AchievementsDesktop />
				</main>
			</section>

			{/* Vision and Mission section */}
			<section id="vision-mission" className="relative container mt-[4rem] xs:mt-0 sm:h-[70svh]">
				<img src="/vm-bg.svg" alt="vm background" className="w-full h-full hidden lg:block" />
				<article className="flex flex-col gap-[1.875rem] lg:absolute lg:top-[-8rem]">
					<h2 className="text-[#ECD164] text-[1.375rem] font-black lg:text-[2.1875rem]">Vision</h2>
					<div className="relative lg:flex lg:flex-row-reverse lg:justify-between lg:items-end">
						<img
							src="/vision-img.png"
							alt="vision image - picture taken in audi four"
							className="vision h-[7.5625rem] w-[11.9375rem] rounded-2xl ml-3 lg:h-[15rem] lg:w-[23rem] lg:-mr-10"
						/>
						<p className="text-justify lg:text-right lg:w-[43%]">
							To be the leading student hub in Malaysia that gather Web3 talents and empower
							students to contribute their unique skills sets and creativity to the growth of the
							blockchain ecosystem locally and globally. A progressive platform where students
							ideas are exchanged, visions are shared and projects are supported and nurtured by
							various means.
						</p>
					</div>
				</article>

				<article className="flex flex-col gap-[1.875rem] lg:absolute lg:bottom-[-3rem]">
					<div className="flex justify-between pt-10 pl-5 lg:justify-end">
						<svg
							className="lg:hidden block"
							xmlns="http://www.w3.org/2000/svg"
							width="40"
							height="18"
							viewBox="0 0 40 18"
							fill="none"
						>
							<rect x="0.5" y="0.5" width="17" height="17" rx="2.5" stroke="#F6AC37" />
							<rect x="29.5" y="5.5" width="10" height="10" rx="2.5" stroke="#F5992B" />
						</svg>
						<h2 className="text-[#EB6701] text-[1.375rem] font-black text-right lg:text-[2.1875rem]">
							Mission
						</h2>
					</div>
					<div className="relative lg:flex lg:justify-between lg:items-end">
						<img
							src="/mission-img.png"
							alt="mission image - picture taken in audi three"
							className="mission h-[7.5625rem] w-[11.9375rem] rounded-2xl mr-3 lg:h-[15rem] lg:w-[23rem] lg:-ml-10"
						/>
						<p className="text-justify lg:text-right lg:w-[43%]">
							To establish a community platform that offers blockchain education, support and
							mentorship that eventually leads to creating more potential use cases of blockchain
							technology. We are building a community with diverse course backgrounds and
							connecting industry partners with students to open more doors. We aim to implement
							practical learning, build significant projects together and educate members with "Gen
							Z style" of modules.
						</p>
					</div>
				</article>
			</section>

			{/* Upcoming Events section */}
			<section id="upcoming-events" className="relative container mt-[4rem] xs:mt-0 lg:mt-[10rem]">
				<div className="flex flex-col gap-[1rem]">
					<div
						className="w-[6.25rem] h-[0.1875rem] rounded-full lg:w-[10rem] lg:h-[0.3rem]"
						style={{
							background: 'linear-gradient(90deg, #F9C646 0%, #F8A02A 100%)',
						}}
					/>
					<h2 className="text-[1.375rem] font-black lg:text-[2.375rem]">Upcoming Events</h2>
				</div>
				<main className="w-full lg:mt-[4rem]">
					<Carousel className="w-full">
						<CarouselContent>
							<CarouselItem className="basis-2/3 md:basis-[36%] lg:basis-[40%]">
								<EventCard />
							</CarouselItem>
							<CarouselItem className="basis-2/3 md:basis-[36%] lg:basis-[40%]">
								<EventCard />
							</CarouselItem>
							<CarouselItem className="basis-2/3 md:basis-[36%] lg:basis-[40%]">
								<EventCard />
							</CarouselItem>
						</CarouselContent>
					</Carousel>
				</main>
			</section>

			{/* gallery section */}
			<section className="container mt-[4rem] h-[60svh] sm:h-full">
				<div className="grid grid-cols-2 auto-rows-fr gap-3 grid-flow-dense">
					{galleryImages.map((image, index) => (
						<img
							key={index}
							src={image.src}
							alt={image.alt}
							className={cn(
								'rounded-[0.1975rem] w-full h-full object-cover',
								image.rows === 2 && 'row-span-2',
								image.rows === 1 && 'row-span-1',
								image.gridRow === 1 && 'row-start-1',
								image.gridRow === 2 && 'row-start-2',
								image.gridRow === 3 && 'row-start-3',
								image.gridColumn === 1 && 'col-start-1',
								image.gridColumn === 2 && 'col-start-2'
							)}
						/>
					))}
				</div>
			</section>

			{/* faq section */}
			<section id="faq" className="container mt-[4rem] sm:mt-[6rem] lg:flex lg:gap-[3rem]">
				<div className="flex flex-col gap-[1rem]">
					<div
						className="w-[6.25rem] h-[0.1875rem] rounded-full lg:w-[10rem] lg:h-[0.3rem]"
						style={{
							background: 'linear-gradient(90deg, #F9C646 0%, #F8A02A 100%)',
						}}
					/>
					<h2 className="text-[1.375rem] font-black lg:text-[2.375rem]">
						Frequently Asked Questions
					</h2>
					<p className="text-sm lg:text-xl">Answer to some question you might have</p>
				</div>

				<main className="z-10 lg:w-[70%]">
					<Accordion type="single" collapsible>
						{faqItems.map((item, index) => (
							<AccordionItem key={index} value={`item-${index}`} className="px-4">
								<AccordionTrigger className="font-black lg:text-2xl">
									{item.question}
								</AccordionTrigger>
								<AccordionContent className="lg:text-base">{item.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</main>
			</section>
		</>
	);
}

function EventCard() {
	return (
		<div
			style={{ background: 'linear-gradient(230deg, #371D02 4.1%, #0D0D0D 72.67%)' }}
			className="py-3 pl-2 flex gap-3 h-[7rem] rounded-[0.5625rem] lg:h-[10rem]"
		>
			<div>
				<img
					src="/event-img-placeholder.png"
					alt="image placeholder"
					className="h-full rounded-[0.375rem]"
				/>
			</div>
			<div className="flex justify-center flex-col">
				<h3 className="text-[0.75rem] font-bold lg:text-[1rem]">Web3 Masterclass</h3>
				<p className="text-[0.625rem] font-bold lg:text-[0.8rem]">23-11-2024</p>

				<Button className="w-full bg-[#82380B] text-white rounded-[0.375rem] h-[1.125rem] text-[0.5625rem] mt-[0.75rem] lg:h-[1.5rem] lg:text-[1rem]">
					Book Ticket
				</Button>
			</div>
		</div>
	);
}
