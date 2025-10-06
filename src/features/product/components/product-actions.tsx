import { useState } from "react";

import FlavourSelect from "./flavour-select";
import type { DeliveryType } from "../types";
import { DeliveryOptions } from "./delivery-options";
import { RatingsBar } from "./ratings-bar";
import { AddToCartRow } from "./add-to-cart-row";

type Props = {
  flavours: string[];
  onAdd?: (payload: {
    flavour: string;
    qty: number;
    delivery: "home" | "store";
  }) => void;
};

const ProductActions = ({ flavours, onAdd }: Props) => {
  const [flavour, setFlavour] = useState(flavours[0] ?? "");
  const [qty, setQty] = useState(1);
  const [delivery, setDelivery] = useState<DeliveryType>("home");

  const handleAdd = () => onAdd?.({ flavour, qty, delivery });
  return (
    <section aria-label="Opciones de compra" className="space-y-6">
      <FlavourSelect options={flavours} value={flavour} onChange={setFlavour} />
      <AddToCartRow qty={qty} onQtyChange={setQty} onAdd={handleAdd} />
      <DeliveryOptions value={delivery} onChange={setDelivery} />
      <RatingsBar total={12} average={4.6} onWrite={() => {}} />
    </section>
  );
};

export default ProductActions;
