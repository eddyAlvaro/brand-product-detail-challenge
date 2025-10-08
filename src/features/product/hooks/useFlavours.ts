import { fetchFlavours } from "@/features/product/services/flavour.api";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const flavoursQuery = queryOptions({
  queryKey: ["flavours"],
  queryFn: fetchFlavours,
  staleTime: 5 * 60 * 1000,
});
export const useFlavours = () => useQuery(flavoursQuery);
