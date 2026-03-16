import { CartSecondIcon, SearchIcon } from "@/components/icons";

export default function SearchCartRow() {
  return (
    <div className="flex mx-auto max-w-7xl items-center justify-end ">
      <button
        type="button"
        aria-label="Buscar"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full  ring-white/50 hover:bg-white/10"
      >
        <SearchIcon className="h-5 w-5" />
      </button>

      <a
        href="/carrito"
        aria-label="Ver carrito"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full  ring-white/50 hover:bg-white/10"
      >
        <CartSecondIcon className="h-5 w-5" />
      </a>
    </div>
  );
}
