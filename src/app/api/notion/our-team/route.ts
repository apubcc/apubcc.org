import { getNotionOurTeam } from '@/lib/notion-actions';

export async function GET(request: Request) {
	const ourTeam = await getNotionOurTeam();
	return Response.json(ourTeam);
}
