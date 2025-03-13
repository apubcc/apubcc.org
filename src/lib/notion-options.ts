import { queryOptions } from '@tanstack/react-query';

export const eventsOptions = queryOptions({
	queryKey: ['events'],
	queryFn: async () => {
		try {
			const response = await fetch(`/api/notion/events`);
			if (!response.ok) {
				throw new Error(`Failed to fetch events: ${response.status}`);
			}
			return response.json();
		} catch (error) {
			console.error('Error fetching events:', error);
			return [];
		}
	},
	staleTime: 1000 * 60 * 5, // 5 minutes
	refetchOnMount: true,
	refetchOnWindowFocus: true,
	refetchOnReconnect: true,
});

export const ourTeamOptions = queryOptions({
	queryKey: ['ourTeam'],
	queryFn: async () => {
		try {
			const response = await fetch(`/api/notion/our-team`);
			if (!response.ok) {
				throw new Error(`Failed to fetch team members: ${response.status}`);
			}
			return response.json();
		} catch (error) {
			console.error('Error fetching team members:', error);
			return [];
		}
	},
	staleTime: 1000 * 60 * 5, // 5 minutes
	refetchOnMount: true,
	refetchOnWindowFocus: true,
	refetchOnReconnect: true,
});

export const partnersOptions = queryOptions({
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
