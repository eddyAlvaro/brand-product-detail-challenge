import { useState } from "react";

import { AddToCartRow } from "@/features/product/components/add-to-cart-row";
import { DeliveryOptions } from "@/features/product/components/delivery-options";
import FlavourSelect from "@/features/product/components/flavour-select";
import { RatingsBar } from "@/features/product/components/ratings-bar";
import type { DeliveryType } from "@/features/product/types";

type Props = {
  flavours: string[];
  onAdd?: (payload: { flavour: string; qty: number; delivery: "home" | "store" }) => void;
};

const ProductActions = ({ flavours, onAdd }: Props) => {
  const [flavour, setFlavour] = useState("");
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
