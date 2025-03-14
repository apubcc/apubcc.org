'use client';
import { Timeline } from '@/components/custom/timeline';
import AchievementsDesktop from '@/components/custom/achievement-desktop';
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useAnimationContext } from './AnimationProvider';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AchievementsSection() {
	const { loveBgRef } = useAnimationContext();

	return (
		<section
			id="achievements"
			className="relative container mt-[4rem] xs:mt-[1rem] sm:mt-0 sm:w-full "
		>
			<img
				id="love-bg-desktop"
				ref={loveBgRef}
				src="/love-bg-desktop.svg"
				alt="love background"
				className="h-[500px] md:h-[600px] lg:h-[800px] w-full scale-[1.5] z-[-1] pointer-events-none"
			/>

			<main className="absolute top-0 xs:top-20 sm:top-36 md:top-24 left-0 right-0 lg:top-60">
				<Timeline />
				<AchievementsDesktop />
			</main>
		</section>
	);
}
