import { PencilSquareIcon, StarIcon } from "../../../components/icons";

type Props = {
  total: number;
  average: number;
  onWrite?: () => void;
};

export const RatingsBar = ({ total, average, onWrite }: Props) => {
  return (
    <section
      className="flex gap-4 sm:gap-12 flex-row md:items-center mb-7 md:mb-0"
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
          className="flex flex-col items-center gap-[3px] font-bold cursor-pointer hover:text-2xl"
          aria-label="Escribir comentario"
        >
          <div className="flex gap-3 items-center">
            <PencilSquareIcon className="h-[16px] w-[16px]" fontSize="medium" />
            <span className="relative text-[15px]">Escribir comentario</span>
          </div>
          <span className="flex h-[1.5px] w-full bg-black" />
        </button>
      </div>
    </section>
  );
};
