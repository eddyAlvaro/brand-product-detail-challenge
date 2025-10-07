import { MenuIcon } from "../../components/icons";

type Props = {
  isOpen: boolean;
  controlsId: string;
  onToggle: () => void;
};

const MobileToggle = ({ isOpen, controlsId, onToggle }: Props) => {
  return (
    <button
      type="button"
      className="md:hidden inline-flex items-center rounded-full p-2 ring-1 ring-white/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
      aria-controls={controlsId}
      aria-expanded={isOpen}
      onClick={onToggle}
    >
      <span className="sr-only">Abrir menú</span>
      <MenuIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};
export default MobileToggle;
