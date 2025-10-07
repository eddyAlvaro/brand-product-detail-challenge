import { queryOptions, useQuery } from "@tanstack/react-query";
import { fetchFlavours } from "../services/flavour.api";

export const flavoursQuery = queryOptions({
  queryKey: ["flavours"],
  queryFn: fetchFlavours,
  staleTime: 5 * 60 * 1000,
});
export const useFlavours = () => useQuery(flavoursQuery);
