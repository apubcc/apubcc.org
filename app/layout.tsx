import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "APUBCC",
  description: "Asia Pacific University Blockchain and Cryptocurrency Club",
};

const nunito = Nunito({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={cn("bg-[#050200] antialiased", nunito.className)}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
