import { queryOptions } from "@tanstack/react-query";

import { getNotionEvents } from "./notion-actions";

export const eventsOptions = queryOptions({
  queryKey: ["events"],
  queryFn: async () => {
    const response = await getNotionEvents();
    return response;
  },
  staleTime: 1000 * 60 * 60 * 24,
});
