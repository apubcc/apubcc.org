import AnimationProvider from '@/components/home/AnimationProvider';
import HeroSection from '@/components/home/HeroSection';
import AchievementsSection from '@/components/home/AchievementsSection';
import VisionMissionSection from '@/components/home/VisionMissionSection';
import UpcomingEventsSection from '@/components/home/UpcomingEventsSection';
import GallerySection from '@/components/home/GallerySection';
import FaqSection from '@/components/home/FaqSection';

export const dynamic = 'force-dynamic';
export default async function Home() {
	return (
		<AnimationProvider>
			<HeroSection />
			<AchievementsSection />
			<VisionMissionSection />
			<UpcomingEventsSection />
			<GallerySection />
			<FaqSection />
		</AnimationProvider>
	);
}
