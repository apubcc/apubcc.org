import { queryOptions } from '@tanstack/react-query';

const BASE_URL =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:3000/api/notion'
		: 'https://apubcc-org.tanweihup.workers.dev/api/notion';

export const eventsOptions = queryOptions({
	queryKey: ['events'],
	queryFn: async () => {
		const response = await fetch(`${BASE_URL}/events`);
		return response.json();
	},
	staleTime: 1000 * 60 * 5, // 5 minutes
});

export const ourTeamOptions = queryOptions({
	queryKey: ['ourTeam'],
	queryFn: async () => {
		const response = await fetch(`${BASE_URL}/our-team`);
		return response.json();
	},
	staleTime: 1000 * 60 * 5, // 5 minutes
});

export const partnersOptions = queryOptions({
	queryKey: ['partners'],
	queryFn: async () => {
		const response = await fetch(`${BASE_URL}/partners`);
		return response.json();
	},
	staleTime: 1000 * 60 * 5, // 5 minutes
});
