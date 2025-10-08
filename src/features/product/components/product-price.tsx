import { formatCurrency } from "@/utils/format";

type Props = {
  price: number;
  oldPrice?: number;
  discountBadge?: string;
};

export const ProductPrice = ({ price, oldPrice, discountBadge }: Props) => {
  return (
    <div className="flex items-center gap-3 mb-2">
      {discountBadge && (
        <span className="bg-brand-primary text-white rounded-[8px] px-5 py-1 text-[19px] font-semibold">
          {discountBadge}
        </span>
      )}
      <p className="text-[32px] font-extrabold text-brand-primary tracking-tight">
        {formatCurrency(price)}
      </p>
      {oldPrice && (
        <p className="text-[24px] text-muted line-through">
          {formatCurrency(oldPrice)}
        </p>
      )}
    </div>
  );
};
