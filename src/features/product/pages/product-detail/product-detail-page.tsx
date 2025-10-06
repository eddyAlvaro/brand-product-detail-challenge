import { Breadcrumbs, Link } from "@mui/material";
import imc_protein_crop from "../../../../assets/whey-protein-crop.png";
import imc_protein from "../../../../assets/whey-protein.png";
import ProductActions from "../../components/product-actions";
const ProductDetailPage = () => {
  return (
    <>
      <section className="grid grid-rows-[auto_1fr] md:grid-cols-2 items-stretch gap-10 w-full max-w-[1440px] m-[0_auto] px-4 py-4  sm:px-[38px] sm:py-[51px] ">
        <div className="flex flex-col gap-2 md:gap-8 ">
          <Breadcrumbs
            className="uppercase text-foreground font-[400] text-[12px] sm:text-[16px]"
            aria-label="breadcrumb"
          >
            <Link underline="hover" color="inherit" href="/">
              Inicio
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Proteínas
            </Link>
            <p>Whey Protein</p>
          </Breadcrumbs>
          <section className="flex flex-col gap-4">
            <img width={`100%`} src={imc_protein} alt="" />
            <div className="grid grid-cols-3 gap-4">
              <img
                className="
                "
                width={`100%`}
                src={imc_protein_crop}
                alt=""
              />
              <img width={`100%`} src={imc_protein_crop} alt="" />
              <img width={`100%`} src={imc_protein_crop} alt="" />
            </div>
          </section>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-brand-accent">Brand</span>
          <h1 className="text-foreground font-[600] text-[32px]">
            Whey Protein - Original
          </h1>
          <div className="flex items-center gap-3 mb-[8px]">
            <span className="bg-brand-primary text-white rounded-[8px] px-5 py-1 text-[19px] font-[600]">
              -5%
            </span>
            <p className="text-[32px] font-bold text-brand-primary">$68.390</p>
            <p className="text-[24px] font-[500] text-muted">$71.990</p>
          </div>
          <span className="w-max border border-brand-green text-brand-green bg-light-green px-1 uppercase text-[8px] ">
            Envío gratis stgo
          </span>
          <p className="my-[16px] text-[12px]">SKU 1588023425509</p>
          <div className="bg-bg rounded-[5px] p-4 text-[16px] text-brand-accent">
            <p>
              Exclusiva fórmula proteica a base de suero de leche aislado e
              hidrolizado que ha sido cientificamente diseñada para construir
              músculo magro libre de grasa, aumentar la fuerza y mejorar el
              rendimiento deportivo.Cada porción contiene 30 g de proteína y una
              matriz de aminoácidos de cadena ramificada, glutamina y creatina
              para acelarar el aumento de músculo y la fuerza.
            </p>
          </div>
          {/* TODO: add product actions */}
          <ProductActions flavours={["Ten", "Twenty", "Thirty"]} />
        </div>
      </section>
      <section></section>
    </>
  );
};

export default ProductDetailPage;
