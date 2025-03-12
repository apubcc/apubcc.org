import { getNotionEvents } from '@/lib/notion-actions';

export async function GET(request: Request) {
	const events = await getNotionEvents();
	return Response.json(events);
}
