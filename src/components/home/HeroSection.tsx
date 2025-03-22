'use client';
import { NavbarDesktop } from '@/components/custom/navbar';
import { useAnimationContext } from './AnimationProvider';

export default function HeroSection() {
	const { fireballRef } = useAnimationContext();

	const windowWidth = window.innerWidth;
	console.log(windowWidth);
	return (
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

			<main className="absolute top-6 sm:top-10 flex items-center px-5 w-full gap-10 md:px-10 lg:top-20 lg:pl-20 min-[1800px]:pl-24 3xl:pl-24 xl:top-24">
				<p className="w-[15rem] xs:w-[17rem] xs:text-[1.6rem] sm:text-[2rem] md:text-[2.15rem] sm:w-[23rem] text-black stroke-black stroke-[1.5px] text-[1.1rem] font-extrabold tracking-[1.05px] -mr-32 z-[1] lg:text-[2.8rem] lg:w-[28rem] min-[1420px]:text-[3rem] min-[1420px]:w-[30rem] min-[1800px]:text-[3.5rem] min-[1800px]:w-[35rem] 3xl:text-[3.5rem] 3xl:w-[35rem]">
					LEADING SOUTHEAST ASIA STUDENT BLOCKCHAIN CLUB
				</p>
				<img
					id="fireball"
					ref={fireballRef}
					src="/fireball.png"
					alt="fireball image"
					className="h-[12rem] xs:h-[16rem] sm:h-[20rem] md:h-[24rem] min-[1420px]:h-[28rem] min-[1800px]:h-[32rem] 3xl:h-[28rem]"
				/>
			</main>
		</section>
	);
}
