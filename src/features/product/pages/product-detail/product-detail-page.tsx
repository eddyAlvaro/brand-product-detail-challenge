import { Suspense, lazy, useEffect, useMemo, useRef, useState } from "react";

import imc_shaker_bottle from "@/assets/shaker-bottle.png";
import imc_protein_crop from "@/assets/whey-protein-crop.png";
import imc_protein from "@/assets/whey-protein.png";
import ProductActions from "@/features/product/components/product-actions";
import { ProductBreadcrumbs } from "@/features/product/components/product-breadcrumbs";
import { ProductDescription } from "@/features/product/components/product-description";
import { ProductGallery } from "@/features/product/components/product-galery";
import { ProductHeader } from "@/features/product/components/product-header";
import { useFlavours } from "@/features/product/hooks/useFlavours";
import type { Product } from "@/features/product/types/products";

const RelatedProductsLazy = lazy(async () => {
  const mod = await import("@/features/product/components/related-products.");
  return {
    default: (props: { products: Product[] }) => <mod.RelatedProducts {...props} />,
  };
});

const ProductDetailPage = () => {
  const { data: flavours } = useFlavours();

  const relatedProducts = useMemo<Product[]>(
    () =>
      Array.from({ length: 5 }).map((_, i) => ({
        id: String(i + 1),
        name: "Whey Protein - Original",
        price: "$68.390",
        oldPrice: "$71.990",
        discount: "-5%",
        image: imc_shaker_bottle,
      })),
    [],
  );

  const breadcrumbs = useMemo(
    () => [
      { label: "Inicio", href: "/" },
      { label: "Proteínas", href: "/proteinas" },
      { label: "Whey Protein" },
    ],
    [],
  );
  const relatedAnchorRef = useRef<HTMLDivElement | null>(null);
  const [showRelated, setShowRelated] = useState(false);

  useEffect(() => {
    if (showRelated) return;
    const el = relatedAnchorRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowRelated(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [showRelated]);

  return (
    <>
      <section className="grid grid-rows-[auto_1fr] md:grid-cols-2 items-stretch gap-8 w-full max-w-[1440px] m-[0_auto] px-4 pt-4  sm:px-[38px] md:pt-[51px] ">
        <div className="flex flex-col gap-2 md:gap-8 ">
          <ProductBreadcrumbs items={breadcrumbs} />
          <ProductGallery
            main={imc_protein}
            thumbs={[imc_protein_crop, imc_protein_crop, imc_protein_crop]}
            title="Whey Protein - Original"
          />
        </div>
        <div className="flex flex-col gap-1">
          <ProductHeader
            brand="Brand"
            title="Whey Protein – Original"
            sku="1588023425509"
            price={68390}
            oldPrice={71990}
            discountBadge="-5%"
          />
          <ProductDescription>
            <p>
              Exclusiva fórmula proteica a base de suero de leche aislado e hidrolizado que ha sido
              científicamente diseñada para construir músculo magro libre de grasa, aumentar la
              fuerza y mejorar el rendimiento deportivo. Cada porción contiene 30 g de proteína y
              una matriz de aminoácidos de cadena ramificada, glutamina y creatina para acelerar el
              aumento de músculo y la fuerza.
            </p>
          </ProductDescription>
          {flavours ? <ProductActions flavours={flavours} /> : <span>Cargando...</span>}
        </div>
      </section>
      <section className="flex flex-col gap-2 max-w-[1440px] w-full px-4 m-[4px_auto] text-center">
        <div className="w-full h-[1px] bg-neutral-dark" />
        <div ref={relatedAnchorRef} />
        <Suspense
          fallback={
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 py-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="mx-auto w-28 aspect-[4/3] rounded-lg bg-neutral-200" />{" "}
                  <div className="mt-2 h-4 w-24 mx-auto bg-neutral-200 rounded" />
                </div>
              ))}
            </div>
          }
        >
          {showRelated ? <RelatedProductsLazy products={relatedProducts} /> : null}
        </Suspense>
      </section>
    </>
  );
};

export default ProductDetailPage;
