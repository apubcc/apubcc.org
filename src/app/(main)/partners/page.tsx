import PartnersList from './partners-list';

export default async function PartnersPage() {
	return (
		<main className="pt-32">
			<h2 className="text-center text-2xl font-bold text-white lg:text-4xl">Partners</h2>
			<PartnersList />
		</main>
	);
}
