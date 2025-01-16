import Footer from "@/components/home/Footer";
import NavbarRootLayout from "./NavbarRootLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarRootLayout />
        {children}
      </body>
    </html>
  );
}
