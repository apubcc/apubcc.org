// Remove Notion SDK client and use fetch API directly
const NOTION_API_URL = 'https://api.notion.com/v1';
const NOTION_VERSION = '2022-06-28';
const NOTION_API_KEY = process.env.NOTION_API_KEY;

const eventsDatabaseId = process.env.NOTION_EVENTS_DATABASE_ID;
const ourTeamDatabaseId = process.env.NOTION_OUR_TEAM_DATABASE_ID;
const partnersDatabaseId = process.env.NOTION_PARTNERS_DATABASE_ID;

// Define Notion response type
type NotionResponse = {
	results: any[];
	[key: string]: any;
};

// Helper function to ensure objects are serializable
function ensureSerializable<T>(obj: T): T {
	return JSON.parse(JSON.stringify(obj));
}

// Helper function to query Notion database
async function queryNotionDatabase(databaseId: string, sorts?: any[]): Promise<NotionResponse> {
	try {
		const response = await fetch(`${NOTION_API_URL}/databases/${databaseId}/query`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${NOTION_API_KEY}`,
				'Notion-Version': NOTION_VERSION,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				sorts: sorts || [],
			}),
		});

		if (!response.ok) {
			throw new Error(`Notion API error: ${response.status} ${response.statusText}`);
		}

		// Parse and ensure the response is serializable
		const data = await response.json();
		return ensureSerializable(data) as NotionResponse;
	} catch (error) {
		console.error('Error querying Notion database:', error);
		throw error;
	}
}

export async function getNotionEvents() {
	try {
		const response = await queryNotionDatabase(eventsDatabaseId!, [
			{
				property: 'Date',
				direction: 'ascending',
			},
		]);

		// Create plain objects with only the needed properties
		const events = response.results.map((page: any) => ({
			id: page.id,
			name: page.properties.Name?.title[0]?.plain_text || '',
			date: page.properties.Date?.date?.start || '',
			link: page.properties.Link?.rich_text[0]?.plain_text || '',
			status: page.properties.Status?.status?.name || '',
			image:
				page.properties.Image?.files[0]?.file?.url ||
				page.properties.Image?.files[0]?.external?.url ||
				'',
		}));

		return events;
	} catch (error) {
		console.error('Error fetching Notion events:', error);
		return [];
	}
}

export async function getNotionOurTeam() {
	try {
		const response = await queryNotionDatabase(ourTeamDatabaseId!);

		// Create plain objects with only the needed properties
		const teamMembers = response.results.map((page: any) => ({
			id: page.id,
			name: page.properties.Name?.title[0]?.plain_text || '',
			nickname: page.properties.Nickname?.rich_text[0]?.plain_text || '',
			department: page.properties.Department?.rich_text[0]?.plain_text || '',
			role: page.properties.Role?.rich_text[0]?.plain_text || '',
			xhandle: page.properties.xhandle?.rich_text[0]?.plain_text || '',
			linkedin: page.properties.LinkedIn?.rich_text[0]?.plain_text || '',
			profilePicture: page.properties.ProfilePicture?.files[0]?.file?.url || '',
			number: page.properties.Number?.number || '',
		}));

		return teamMembers;
	} catch (error) {
		console.error('Error fetching Notion team members:', error);
		return [];
	}
}

export async function getNotionPartners() {
	try {
		const response = await queryNotionDatabase(partnersDatabaseId!);

		// Create plain objects with only the needed properties
		const partners = response.results.map((page: any) => ({
			id: page.id,
			name: page.properties.Name?.title[0]?.plain_text || '',
			logo: page.properties.logo?.files[0]?.file?.url || '',
			roundLogo: page.properties.RoundLogo?.files[0]?.file?.url || '',
			number: page.properties.Number?.number || '',
		}));

		return partners;
	} catch (error) {
		console.error('Error fetching Notion partners:', error);
		return [];
	}
}
