import { PencilSquareIcon, StarIcon } from "../../../components/icons";

type Props = {
  total: number;
  average: number;
  onWrite?: () => void;
};

export const RatingsBar = ({ total, average, onWrite }: Props) => {
  return (
    <section
      className="flex flex-col gap-12 md:flex-row md:items-center "
      aria-label="Resumen de valoraciones y acción para escribir comentario"
    >
      <div className="flex items-center gap-2 text-[16px]">
        <span className=" font-extrabold leading-none">{total}</span>
        <span className="">valoraciones de clientes</span>
        <div className="flex items-center gap-2 pl-2">
          <StarIcon className="h-6 w-6" />
          <span className="font-bold text-brand-accent">
            {average.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          onClick={onWrite}
          className="group flex items-center gap-3 text-xl font-extrabold"
          aria-label="Escribir comentario"
        >
          <PencilSquareIcon className="h-[16px] w-[16px]" fontSize="medium" />
          <span className="relative text-[15px]">
            Escribir comentario
            <span className="block h-[3px] w-full bg-black transition-all group-hover:w-[110%]" />
          </span>
        </button>
      </div>
    </section>
  );
};
