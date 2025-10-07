import type { FlavourResponse } from "../types/flavour";

export const mapFlavourResponse = (apiData: FlavourResponse): string[] => {
  return apiData.sabores.map((flavour) => flavour.name.trim());
};
