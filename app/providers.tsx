"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getQueryClient } from "./get-query-client";
import Lenis from "@/components/custom/lenis";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <Lenis> */}
      {children}
      {/* </Lenis> */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
