export type DeliveryType = "home" | "store";

export type AddToCartPayload = {
  flavour: string;
  qty: number;
  delivery: DeliveryType;
};
