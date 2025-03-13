import { getNotionEvents } from '@/lib/notion-actions';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
	try {
		const events = await getNotionEvents();

		// Ensure the response is fully serializable by converting to and from JSON
		const serializedEvents = JSON.parse(JSON.stringify(events));

		// Use NextResponse instead of Response.json for better compatibility
		return new Response(JSON.stringify(serializedEvents), {
			headers: {
				'content-type': 'application/json',
			},
		});
	} catch (error) {
		console.error('Error in events API route:', error);
		return new Response(JSON.stringify({ error: 'Failed to fetch events' }), {
			status: 500,
			headers: {
				'content-type': 'application/json',
			},
		});
	}
}
