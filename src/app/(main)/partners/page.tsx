import { getQueryClient } from '@/app/get-query-client';
import { partnersOptions } from '@/lib/notion-options';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import PartnersList from './partners-list';

export default async function PartnersPage() {
	const queryClient = getQueryClient();

	await queryClient.prefetchQuery(partnersOptions);
	const partners = queryClient.getQueryData(partnersOptions.queryKey);
	console.log(partners);
	return (
		<main className="pt-32">
			<h2 className="text-center text-2xl font-bold text-white lg:text-4xl">Partners</h2>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<PartnersList />
			</HydrationBoundary>
		</main>
	);
}
