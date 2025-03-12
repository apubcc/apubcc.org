'use server';
import { Client } from '@notionhq/client';

const notion = new Client({
	auth: process.env.NOTION_API_KEY,
});

const eventsDatabaseId = process.env.NOTION_EVENTS_DATABASE_ID;
const ourTeamDatabaseId = process.env.NOTION_OUR_TEAM_DATABASE_ID;
const partnersDatabaseId = process.env.NOTION_PARTNERS_DATABASE_ID;

export async function getNotionEvents() {
	try {
		const response = await notion.databases.query({
			database_id: eventsDatabaseId!,
			sorts: [
				{
					property: 'Date',
					direction: 'ascending',
				},
			],
		});

		return response.results.map((page: any) => {
			return {
				id: page.id,
				name: page.properties.Name?.title[0]?.plain_text || '',
				// Date is rich_text type instead of date type
				date: page.properties.Date?.date?.start || '',
				// Link is rich_text type instead of url type
				link: page.properties.Link?.rich_text[0]?.plain_text || '',
				// Adding status and poster in case you need them
				status: page.properties.Status?.status?.name || '',
				image:
					page.properties.Image?.files[0]?.file?.url ||
					page.properties.Image?.files[0]?.external?.url ||
					'',
			};
		});
	} catch (error) {
		console.error('Error fetching Notion events:', error);
		return [];
	}
}

export async function getNotionOurTeam() {
	const response = await notion.databases.query({
		database_id: ourTeamDatabaseId!,
	});

	return response.results.map((page: any) => {
		return {
			id: page.id,
			name: page.properties.Name?.title[0]?.plain_text || '',
			nickname: page.properties.Nickname?.rich_text[0]?.plain_text || '',
			department: page.properties.Department?.rich_text[0]?.plain_text || '',
			role: page.properties.Role?.rich_text[0]?.plain_text || '',
			xhandle: page.properties.xhandle?.rich_text[0]?.plain_text || '',
			linkedin: page.properties.LinkedIn?.rich_text[0]?.plain_text || '',
			profilePicture: page.properties.ProfilePicture?.files[0]?.file?.url || '',
			number: page.properties.Number?.number || '',
		};
	});
}

export async function getNotionPartners() {
	const response = await notion.databases.query({
		database_id: partnersDatabaseId!,
	});

	return response.results.map((page: any) => {
		return {
			id: page.id,
			name: page.properties.Name?.title[0]?.plain_text || '',
			logo: page.properties.logo?.files[0]?.file?.url || '',
			roundLogo: page.properties.RoundLogo?.files[0]?.file?.url || '',
			number: page.properties.Number?.number || '',
		};
	});
}
