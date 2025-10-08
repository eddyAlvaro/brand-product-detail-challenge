import { mapFlavourResponse } from "@/features/product/services/flavour.mapper";
import type { FlavourResponse } from "@/features/product/types/flavour";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchFlavours = async (): Promise<string[]> => {
  const response = await fetch(`${API_URL}/sabores`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok)
    throw new Error(`Error ${response.status}: No se pudo obtener los sabores`);

  const data = (await response.json()) as FlavourResponse;
  return mapFlavourResponse(data);
};
