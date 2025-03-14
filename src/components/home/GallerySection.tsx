'use client';
import { cn } from '@/lib/utils';
import { useAnimationContext } from './AnimationProvider';

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

export default function GallerySection() {
	const { roundedCloudRef } = useAnimationContext();
	return (
		<section className="container mt-[4rem] h-[60svh] sm:h-full sm:scale-95 3xl:scale-75 3xl:-mt-10">
			<img
				src="/rounded-cloud.svg"
				alt="rounded cloud"
				className="absolute bottom-0 left-0"
				ref={roundedCloudRef}
			/>
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
	);
}
