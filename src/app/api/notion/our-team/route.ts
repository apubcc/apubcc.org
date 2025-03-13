import { getNotionOurTeam } from '@/lib/notion-actions';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
	try {
		const ourTeam = await getNotionOurTeam();

		// Ensure the response is fully serializable by converting to and from JSON
		const serializedTeam = JSON.parse(JSON.stringify(ourTeam));

		// Use NextResponse instead of Response.json for better compatibility
		return new Response(JSON.stringify(serializedTeam), {
			headers: {
				'content-type': 'application/json',
			},
		});
	} catch (error) {
		console.error('Error in our-team API route:', error);
		return new Response(JSON.stringify({ error: 'Failed to fetch team members' }), {
			status: 500,
			headers: {
				'content-type': 'application/json',
			},
		});
	}
}
