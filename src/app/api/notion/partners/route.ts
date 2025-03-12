import { getNotionPartners } from '@/lib/notion-actions';

export async function GET(request: Request) {
	const partners = await getNotionPartners();
	return Response.json(partners);
}
