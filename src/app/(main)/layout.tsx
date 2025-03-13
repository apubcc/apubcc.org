import { NavbarDesktopExcludeHome } from '@/components/custom/navbar';
import Providers from '@/app/providers';
export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<NavbarDesktopExcludeHome />
			<Providers>{children}</Providers>
		</>
	);
}
