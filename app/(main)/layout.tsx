import NavbarRootLayout from "./NavbarRootLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarRootLayout />
      {children}
    </>
  );
}
