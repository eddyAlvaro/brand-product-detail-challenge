import { ProductPrice } from "./product-price";

type Props = {
  brand: string;
  title: string;
  sku?: string;
  price: number;
  oldPrice?: number;
  discountBadge?: string;
};

export const ProductHeader = ({
  brand,
  title,
  sku,
  price,
  oldPrice,
  discountBadge,
}: Props) => {
  return (
    <header className="flex flex-col gap-1">
      <span className="text-brand-accent">{brand}</span>
      <h1 className="text-foreground font-[600] text-[28px] sm:text-[32px] leading-[35px]">
        {title}
      </h1>
      <ProductPrice
        price={price}
        oldPrice={oldPrice}
        discountBadge={discountBadge}
      />

      <span className="w-max border border-brand-green text-brand-green bg-light-green px-1 uppercase text-[8px]">
        Envío gratis stgo
      </span>

      {sku && (
        <p className="my-[16px] text-[12px] text-brand-accent">SKU {sku}</p>
      )}
    </header>
  );
};
