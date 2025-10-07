import type { FlavourResponse } from "../types/flavour";
import { mapFlavourResponse } from "./flavour.mapper";

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
