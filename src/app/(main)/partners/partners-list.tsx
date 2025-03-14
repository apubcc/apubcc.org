'use client';
import { useQuery } from '@tanstack/react-query';

export default function PartnersList() {
	const { data } = useQuery({
		queryKey: ['partners'],
		queryFn: async () => {
			try {
				const response = await fetch(`/api/notion/partners`);
				if (!response.ok) {
					throw new Error(`Failed to fetch partners: ${response.status}`);
				}
				return response.json();
			} catch (error) {
				console.error('Error fetching partners:', error);
				return [];
			}
		},
		staleTime: 1000 * 60 * 5, // 5 minutes
		refetchOnMount: true,
		refetchOnWindowFocus: true,
		refetchOnReconnect: true,
	});
	// sort data by number
	const sortedData = (data as any)?.sort((a: any, b: any) => a.number - b.number);
	return (
		<div className="mt-8 grid grid-cols-2 gap-4 px-4 sm:gap-8 md:grid-cols-3 lg:px-8 xl:grid-cols-4 2xl:px-16">
			{sortedData?.map((partner: any) => (
				<div
					key={partner.name}
					className="relative flex h-52 w-full flex-col items-center justify-center pt-10 gap-[1rem] bg-[url('/partners/white-card.svg')] bg-contain bg-center bg-no-repeat md:h-[18.875rem] md:gap-12"
				>
					<div className="flex items-center gap-2 w-full px-4 pt-1 absolute top-5 min-[1400px]:top-10">
						<img
							src={partner.roundLogo}
							alt={partner.name}
							className="h-[1.6875rem] w-[1.6875rem] rounded-full object-contain"
						/>

						<p className="text-[0.5rem] font-bold md:text-[0.875rem] text-black">{partner.name}</p>
					</div>

					<div className="px-2 h-fit ">
						<img
							src={partner.logo}
							alt={partner.name}
							className="h-full w-full px-2 object-contain rounded-[2rem]"
						/>
					</div>
				</div>
			))}
		</div>
	);
}
