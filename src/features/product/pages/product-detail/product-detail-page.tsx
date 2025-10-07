import imc_protein_crop from "../../../../assets/whey-protein-crop.png";
import imc_protein from "../../../../assets/whey-protein.png";
import ProductActions from "../../components/product-actions";
import imc_shaker_bottle from "../../../../assets/shaker-bottle.png";
import {
  RelatedProducts,
  type Product,
} from "../../components/related-products.";
import { ProductGallery } from "../../components/product-galery";
import { ProductHeader } from "../../components/product-header";
import { ProductDescription } from "../../components/product-description";
import { useFlavours } from "../../hooks/useFlavours";
import { ProductBreadcrumbs } from "../../components/product-breadcrumbs";
const ProductDetailPage = () => {
  const { data: flavours } = useFlavours();

  const relatedProducts: Product[] = Array.from({ length: 5 }).map((_, i) => ({
    id: String(i + 1),
    name: "Whey Protein - Original",
    price: "$68.390",
    oldPrice: "$71.990",
    discount: "-5%",
    image: imc_shaker_bottle,
  }));

  const breadcrumbs = [
    { label: "Inicio", href: "/" },
    { label: "Proteínas", href: "/proteinas" },
    { label: "Whey Protein" },
  ];

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
              Exclusiva fórmula proteica a base de suero de leche aislado e
              hidrolizado que ha sido científicamente diseñada para construir
              músculo magro libre de grasa, aumentar la fuerza y mejorar el
              rendimiento deportivo. Cada porción contiene 30 g de proteína y
              una matriz de aminoácidos de cadena ramificada, glutamina y
              creatina para acelerar el aumento de músculo y la fuerza.
            </p>
          </ProductDescription>
          {flavours ? (
            <ProductActions flavours={flavours} />
          ) : (
            <span>Cargando...</span>
          )}
        </div>
      </section>
      <section className="flex flex-col gap-2 max-w-[1440px] w-full px-4 m-[4px_auto] text-center">
        <div className="w-full h-[1px] bg-neutral-dark" />
        <RelatedProducts products={relatedProducts} />
      </section>
    </>
  );
};

export default ProductDetailPage;
