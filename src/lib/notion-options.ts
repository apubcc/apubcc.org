import { queryOptions } from '@tanstack/react-query';

import { getNotionEvents, getNotionOurTeam, getNotionPartners } from './notion-actions';

export const eventsOptions = queryOptions({
	queryKey: ['events'],
	queryFn: async () => {
		const response = await getNotionEvents();
		return response;
	},
	staleTime: 1000 * 60 * 5, // 5 minutes
});

export const ourTeamOptions = queryOptions({
	queryKey: ['ourTeam'],
	queryFn: async () => {
		const response = await getNotionOurTeam();
		return response;
	},
	staleTime: 1000 * 60 * 5, // 5 minutes
});

export const partnersOptions = queryOptions({
	queryKey: ['partners'],
	queryFn: async () => {
		const response = await getNotionPartners();
		return response;
	},
	staleTime: 1000 * 60 * 5, // 5 minutes
});
