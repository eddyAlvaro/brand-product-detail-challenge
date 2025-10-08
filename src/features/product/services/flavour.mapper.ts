import type { FlavourResponse } from "@/features/product/types/flavour";

export const mapFlavourResponse = (apiData: FlavourResponse): string[] => {
  return apiData.sabores.map((flavour) => flavour.name.trim());
};
