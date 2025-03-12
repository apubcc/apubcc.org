import AnimationProvider from '@/components/home/AnimationProvider';
import HeroSection from '@/components/home/HeroSection';
import AchievementsSection from '@/components/home/AchievementsSection';
import VisionMissionSection from '@/components/home/VisionMissionSection';
import UpcomingEventsSection from '@/components/home/UpcomingEventsSection';
import GallerySection from '@/components/home/GallerySection';
import FaqSection from '@/components/home/FaqSection';
import { eventsOptions } from '@/lib/notion-options';
import { getQueryClient } from './get-query-client';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
export default async function Home() {
	const queryClient = getQueryClient();

	await queryClient.prefetchQuery(eventsOptions);
	const events = queryClient.getQueryData(eventsOptions.queryKey);
	return (
		<AnimationProvider>
			<HeroSection />
			<AchievementsSection />
			<VisionMissionSection />
			<HydrationBoundary state={dehydrate(queryClient)}>
				<UpcomingEventsSection />
			</HydrationBoundary>
			<GallerySection />
			<FaqSection />
		</AnimationProvider>
	);
}
