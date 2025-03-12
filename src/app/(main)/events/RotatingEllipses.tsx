// src/app/(main)/events/RotatingEllipses.tsx
'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const RotatingEllipses = () => {
	// Configuration parameters - reduce these values
	const BASE_ORBIT_RADIUS = 150; // Reduced from 250
	const CYCLE_DURATION = 15;
	const RADIUS_VARIATION = 30; // Reduced from 50

	const [time, setTime] = useState(0);

	useEffect(() => {
		// Animation loop
		const interval = setInterval(() => {
			setTime((prev) => (prev + 0.01) % 1);
		}, 10);

		return () => {
			clearInterval(interval);
		};
	}, []);

	// Each ellipse has its own starting position, speed, and movement pattern
	const ellipses = [
		{
			src: '/events/Ellipse 26.svg',
			offsetAngle: 0,
			speedFactor: 1,
			size: 375,
			opacity: 0.8,
			radiusOffset: 10, // Reduced variation
			wobbleFactor: 1.2,
		},
		{
			src: '/events/Ellipse 27.svg',
			offsetAngle: 60,
			speedFactor: 0.7,
			size: 375,
			opacity: 0.7,
			radiusOffset: -15, // Reduced variation
			wobbleFactor: 0.8,
		},
		{
			src: '/events/Ellipse 28.svg',
			offsetAngle: 120,
			speedFactor: 1.1,
			size: 375,
			opacity: 0.75,
			radiusOffset: 20, // Reduced variation
			wobbleFactor: 1.5,
		},
		{
			src: '/events/Ellipse 29.svg',
			offsetAngle: 180,
			speedFactor: 0.9,
			size: 375,
			opacity: 0.65,
			radiusOffset: -10, // Reduced variation
			wobbleFactor: 0.9,
		},
		{
			src: '/events/Ellipse 30.svg',
			offsetAngle: 240,
			speedFactor: 1.2,
			size: 375,
			opacity: 0.7,
			radiusOffset: 5, // Reduced variation
			wobbleFactor: 1.3,
		},
		{
			src: '/events/Ellipse 31.svg',
			offsetAngle: 300,
			speedFactor: 0.8,
			size: 375,
			opacity: 0.8,
			radiusOffset: -5, // Reduced variation
			wobbleFactor: 1.1,
		},
	];

	return (
		// Changed from fixed to absolute to ensure it stays within the container
		<div className="absolute inset-0 w-full h-full overflow-visible -z-10 pointer-events-none">
			<div className="absolute inset-0 w-full h-full flex items-center justify-center">
				{ellipses.map((ellipse, index) => {
					const angle = (time * 360 * ellipse.speedFactor + ellipse.offsetAngle) % 360;
					const radians = (angle * Math.PI) / 180;

					const radiusVariation =
						Math.sin(time * Math.PI * 2 * ellipse.wobbleFactor) * RADIUS_VARIATION;

					const currentRadius = BASE_ORBIT_RADIUS + ellipse.radiusOffset + radiusVariation;

					const x = Math.cos(radians) * currentRadius;
					const y = Math.sin(radians) * currentRadius;

					return (
						<motion.div
							key={index}
							className="absolute"
							style={{
								width: `${ellipse.size}px`,
								height: `${ellipse.size}px`,
								left: '50%',
								top: '50%',
								marginLeft: `-${ellipse.size / 2}px`,
								marginTop: `-${ellipse.size / 2}px`,
								x,
								y,
								position: 'absolute',
								opacity: ellipse.opacity,
							}}
							animate={{
								x,
								y,
								rotate: [0, 360],
							}}
							transition={{
								x: { duration: 0.5, ease: 'easeInOut' },
								y: { duration: 0.5, ease: 'easeInOut' },
								rotate: {
									duration: CYCLE_DURATION * 2,
									ease: 'linear',
									repeat: Infinity,
								},
							}}
						>
							<img
								src={ellipse.src}
								alt={`Rotating Ellipse ${index + 1}`}
								className="w-full h-full"
							/>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default RotatingEllipses;
