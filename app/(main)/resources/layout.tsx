import { cn } from "@/lib/utils";
import Footer from "@/components/home/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body
      className={cn("text-white antialiased")}
      style={{
        background:
          "radial-gradient(47.81% 47.81% at 50.04% 52.19%, #C6520A 0%, #250F01 84%)",
      }}
    >
      {children}
    </body>
  );
}
