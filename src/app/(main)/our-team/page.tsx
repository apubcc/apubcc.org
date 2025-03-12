import { getQueryClient } from '@/app/get-query-client';
import TeamContent from './TeamContent';
import { ourTeamOptions } from '@/lib/notion-options';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

export default async function TeamPage() {
	const queryClient = getQueryClient();

	await queryClient.prefetchQuery(ourTeamOptions);
	const ourTeam = queryClient.getQueryData(ourTeamOptions.queryKey);

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<TeamContent />
		</HydrationBoundary>
	);
}
