import { getNotionPartners } from '@/lib/notion-actions';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
	try {
		const partners = await getNotionPartners();

		// Ensure the response is fully serializable by converting to and from JSON
		const serializedPartners = JSON.parse(JSON.stringify(partners));

		// Use NextResponse instead of Response.json for better compatibility
		return new Response(JSON.stringify(serializedPartners), {
			headers: {
				'content-type': 'application/json',
			},
		});
	} catch (error) {
		console.error('Error in partners API route:', error);
		return new Response(JSON.stringify({ error: 'Failed to fetch partners' }), {
			status: 500,
			headers: {
				'content-type': 'application/json',
			},
		});
	}
}
