import Footer from "@/components/home/Footer";
import NavbarRootLayout from "./NavbarRootLayout";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarRootLayout />
      {children}
      <section className="flex h-[68svh] items-end justify-center bg-gradient-to-b from-[rgba(238,145,89,0)] from-[17.28%] to-[#F16109] to-[73%]">
        <Footer />
      </section>
    </>
  );
}
