'use client';
import { Timeline } from '@/components/custom/timeline';
import AchievementsDesktop from '@/components/custom/achievement-desktop';
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AchievementsSection() {
	const loveBgMobileRef = useRef<HTMLImageElement>(null);

	useGSAP(() => {
		gsap.timeline({
			scrollTrigger: {
				trigger: '#achievements',
				start: 'top 200px',
				end: 'center center',
				markers: false,
				scrub: 1,
			},
		});

		gsap
			.timeline({
				scrollTrigger: {
					trigger: '#vision-mission',
					start: 'top 200px',
					end: 'center center',
					markers: false,
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
					markers: false,
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
					markers: false,
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
		<section
			id="achievements"
			className="relative container mt-[4rem] xs:mt-[1rem] sm:mt-0 sm:w-full"
		>
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
	);
}
