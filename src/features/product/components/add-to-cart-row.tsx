import { AddToCartButton } from "@/features/product/components/add-to-cart-button";
import QuantityStepper from "@/features/product/components/quantity-stepper";

type Props = {
  qty: number;
  onQtyChange: (n: number) => void;
  onAdd?: () => void;
};

export const AddToCartRow = ({ qty, onQtyChange, onAdd }: Props) => {
  return (
    <div className="grid grid-cols-[.5fr_1fr] items-center justify-center gap-4 mb-4">
      <QuantityStepper value={qty} onChange={onQtyChange} />
      <AddToCartButton onClick={onAdd} />
    </div>
  );
};
