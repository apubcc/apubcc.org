'use client';
import { useRef, createContext, useContext, ReactNode } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type AnimationContextType = {
	fireballRef: React.RefObject<HTMLImageElement | null>;
	loveBgRef: React.RefObject<HTMLImageElement | null>;
	roundedCloudRef: React.RefObject<HTMLImageElement | null>;
};

const AnimationContext = createContext<AnimationContextType | null>(null);

export const useAnimationContext = () => {
	const context = useContext(AnimationContext);
	if (!context) {
		throw new Error('useAnimationContext must be used within an AnimationProvider');
	}
	return context;
};

export default function AnimationProvider({ children }: { children: ReactNode }) {
	const fireballRef = useRef<HTMLImageElement>(null);
	const loveBgRef = useRef<HTMLImageElement>(null);
	const roundedCloudRef = useRef<HTMLImageElement>(null);
	useGSAP(() => {
		const fireballTl1 = gsap.timeline({
			scrollTrigger: {
				immediateRender: false,
				trigger: '#achievements',
				start: () => {
					const windowWidth = window.innerWidth;
					if (windowWidth < 768) {
						return '200px center';
					}
					return 'top 100px';
				},
				end: 'bottom center',
				markers: false,
				scrub: 1,
			},
		});

		fireballTl1
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
				scale: 0.7,
				opacity: 0.7,
				yPercent: 500,
				x: '-70vw',
				duration: 2,
				ease: 'power2.inOut',
			})
			.to(fireballRef.current, {
				scale: 0.7,
				opacity: 0.7,
				yPercent: 800,
				x: '60vw',
				duration: 2,
				ease: 'power2.inOut',
			});

		const loveBgTl1 = gsap.timeline({
			scrollTrigger: {
				trigger: '#vision-mission',
				start: 'top 200px',
				end: 'center center',
				markers: false,
				scrub: 1,
			},
		});

		loveBgTl1
			.to(loveBgRef.current, {
				yPercent: () => {
					const windowWidth = window.innerWidth;
					if (windowWidth >= 1420) {
						return 90;
					}
					return 150;
				},
				xPercent: 50,
				scale: () => {
					const windowWidth = window.innerWidth;
					if (windowWidth < 768) {
						return 1.1;
					}
					return 0.9;
				},
				duration: 2,
				ease: 'power2.inOut',
			})
			.to(loveBgRef.current, {
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
			.to(loveBgRef.current, {
				yPercent: () => {
					const windowWidth = window.innerWidth;
					if (windowWidth < 768) {
						return 530;
					} else if (windowWidth >= 1420) {
						return 390;
					}
					return 330;
				},
				xPercent: 50,
				zIndex: -100,
				duration: 2,
				ease: 'power2.inOut',
			});

		gsap.to(roundedCloudRef.current, {
			scale: 2,
			zIndex: -100,
			duration: 2,
			x: -300,
			y: 200,
			ease: 'power2.inOut',
		});
	});

	return (
		<AnimationContext.Provider value={{ fireballRef, loveBgRef, roundedCloudRef }}>
			{children}
		</AnimationContext.Provider>
	);
}
