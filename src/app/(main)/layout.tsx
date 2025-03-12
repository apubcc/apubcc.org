import { NavbarDesktopExcludeHome } from '@/components/custom/navbar';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<NavbarDesktopExcludeHome />
			{children}
		</>
	);
}
